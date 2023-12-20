// PerfilPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc, orderBy, onSnapshot, query as firestoreQuery } from 'firebase/firestore';
import { firestore } from './firebase-config';
import LogoutButton from './LogOutButton';
import './perfil.css'; // Asegúrate de importar tu hoja de estilos

function PerfilPage({ user }) {
  const dummy = useRef();
  const perfilMessagesRef = collection(firestore, 'perfilMessages', user.uid, 'messages');
  const perfilMessagesQuery = firestoreQuery(perfilMessagesRef, orderBy('createdAt', 'desc'));

  const [perfilMessages, setPerfilMessages] = useState([]);
  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(perfilMessagesQuery, (snapshot) => {
      const messageList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPerfilMessages(messageList);
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    });

    return () => unsubscribe();
  }, [perfilMessagesQuery]);

  const sendPerfilMessage = async (e) => {
    e.preventDefault();

    await addDoc(perfilMessagesRef, {
      text: formValue,
      createdAt: new Date(),
      user: user.displayName,
    });

    setFormValue('');
  };

  return (
    <div className="PerfilPage"> {/* Agrega una clase para aplicar estilos al componente completo */}
      <h1>Página de Perfil</h1>
      {user && (
        <div>
          <p>Usuario: {user.displayName}</p>
          <p>Correo electrónico: {user.email}</p>

          <main>
            {perfilMessages.map((msg) => (
              <ProfileMessage key={msg.id} message={msg} />
            ))}
            <span ref={dummy}></span>
          </main>

          <form onSubmit={sendPerfilMessage}>
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
