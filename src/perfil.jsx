// PerfilPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc, orderBy, onSnapshot, query as firestoreQuery } from 'firebase/firestore';
import { firestore } from './firebase-config';
import LogoutButton from './LogOutButton';
import './perfil.css'; // Asegúrate de importar tu hoja de estilos

function PerfilPage({ user }) {
  const dummy = useRef();
  const globalMessagesRef = collection(firestore, 'globalMessages');
  const globalMessagesQuery = firestoreQuery(globalMessagesRef, orderBy('createdAt', 'desc'));

  const [globalMessages, setGlobalMessages] = useState([]);
  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(globalMessagesQuery, (snapshot) => {
      const messageList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setGlobalMessages(messageList.reverse()); // Invertir el orden de los mensajes
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    });

    return () => unsubscribe();
  }, [globalMessagesQuery]);

  const sendGlobalMessage = async (e) => {
    e.preventDefault();

    await addDoc(globalMessagesRef, {
      text: formValue,
      createdAt: new Date(),
      user: user.displayName,
    });

    setFormValue('');
  };

  return (
    <div className="PerfilPage">
      <h1>Página de Perfil</h1>
      {user && (
        <div>
          <p>Usuario: {user.displayName}</p>
          <p>Correo electrónico: {user.email}</p>

          <main>
            {globalMessages.map((msg) => (
              <ProfileMessage key={msg.id} message={msg} />
            )).reverse()} {/* Invertir el orden de renderizado */}
            <span ref={dummy}></span>
          </main>

          <form onSubmit={sendGlobalMessage}>
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Escribe un Mensaje"
            />
            <button type="submit" disabled={!formValue}>
              Enviar
            </button>
          </form>

          <LogoutButton />
        </div>
      )}
    </div>
  );
}

function ProfileMessage({ message }) {
  const { text, user } = message;

  return (
    <div className="Mensaje">
      <p>
        <strong>{user}:</strong> {text}
      </p>
    </div>
  );
}

export default PerfilPage;
