import React, { useState, useEffect, useRef } from 'react';
import {
  collection,
  addDoc,
  orderBy,
  onSnapshot,
  query as firestoreQuery,
} from 'firebase/firestore';
import { firestore } from './firebase-config';
import LogoutButton from './LogOutButton';
import './perfil.css';

function PerfilPage({ user }) {
  const dummy = useRef();
  const chatWindow = useRef();

  const globalMessagesRef = collection(firestore, 'globalMessages');
  const globalMessagesQuery = firestoreQuery(
    globalMessagesRef,
    orderBy('createdAt', 'desc')
  );

  const [globalMessages, setGlobalMessages] = useState([]);
  const [formValue, setFormValue] = useState('');
  const [usuariosConectados, setUsuariosConectados] = useState([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const offlineMessagesKey = 'offlineMessages';
  const [offlineMessages, setOfflineMessages] = useState(
    JSON.parse(localStorage.getItem(offlineMessagesKey)) || []
  );

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(globalMessagesQuery, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Update the state with new messages and reflect in UI
      setGlobalMessages((prevMessages) => [
        ...prevMessages,
        ...newMessages.filter((msg) => !prevMessages.some((prevMsg) => prevMsg.id === msg.id)),
      ]);

      // Scroll to the bottom of the chat window when new messages are received
      chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
    });

    return () => unsubscribe();
  }, [globalMessagesQuery]);

  useEffect(() => {
    // Scroll to the bottom of the chat window when new messages are received
    chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
  }, [globalMessages]);

  useEffect(() => {
    const usuariosConectadosRef = collection(
      firestore,
      'usuariosConectados'
    );
    const usuariosConectadosQuery = firestoreQuery(
      usuariosConectadosRef
    );

    const unsubscribeUsuariosConectados = onSnapshot(
      usuariosConectadosQuery,
      (snapshot) => {
        const usuarios = snapshot.docs.map((doc) => doc.data().nombre);
        setUsuariosConectados(usuarios);
      }
    );

    return () => unsubscribeUsuariosConectados();
  }, []);

  const estaUsuarioConectado = (nombreUsuario) => {
    return isOnline && usuariosConectados.includes(nombreUsuario);
  };

  const saveOfflineMessage = (message) => {
    const updatedMessages = [...offlineMessages, message];
    setOfflineMessages(updatedMessages);
    localStorage.setItem(
      offlineMessagesKey,
      JSON.stringify(updatedMessages)
    );
  };
  const sendGlobalMessage = async (e) => {
    e.preventDefault();

    if (!isOnline) {
      const message = {
        text: formValue,
        createdAt: new Date(),
        user: user.displayName,
      };
      saveOfflineMessage(message);

      window.alert(
        'No hay conexión a Internet. Mensaje guardado localmente.'
      );
      setFormValue('');
      return;
    }

    try {
      const newMessage = {
        text: formValue,
        createdAt: new Date(),
        user: user.displayName,
      };

      // Update the state with the new message locally
      setGlobalMessages((prevMessages) => [newMessage, ...prevMessages]);

      // Scroll to the bottom of the chat window
      chatWindow.current.scrollTop = chatWindow.current.scrollHeight;

      // Add the new message to Firestore
      await addDoc(globalMessagesRef, newMessage);

      // Clear the form value after successfully sending the message
      setFormValue('');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <div className="PerfilPageContainer">
      {/* ... (other JSX code) */}
      <div className="PerfilPage">
        <main ref={chatWindow}>
          {globalMessages.map((msg) => (
            <ProfileMessage
              key={msg.id}
              message={msg}
              isCurrentUser={msg.user === user.displayName}
              estaConectado={estaUsuarioConectado(msg.user)}
            />
          ))}
          <span ref={dummy}></span>
        </main>
        <form onSubmit={sendGlobalMessage} className="EnviarMensajeForm">
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Escribe un Mensaje"
          />
          <button
            type="submit"
            className="enviarButton"
            disabled={!formValue}
          >
            Enviar
          </button>
        </form>
        <LogoutButton />
      </div>
    </div>
  );
}


function ProfileMessage({ message, isCurrentUser, estaConectado }) {
  const { text, user } = message;

  return (
    <div className={`Mensaje ${isCurrentUser ? 'MensajeUsuario' : ''}`}>
      <p>
        {isCurrentUser ? (
          <span>
            {estaConectado && (
              <span className="EstadoConexion MensajeUsuarioConectado"></span>
            )}
            <strong>{user}:</strong> {text}
          </span>
        ) : (
          <span>
            {estaConectado && (
              <span className="EstadoConexion MensajeUsuarioConectado"></span>
            )}
            <strong>{user}:</strong> {text}
          </span>
        )}
      </p>
    </div>
  );
}

export default PerfilPage;