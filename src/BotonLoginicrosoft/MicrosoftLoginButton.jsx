// MicrosoftLoginButton.jsx
import React from 'react';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import firebaseApp from '../firebase-config';
import ComponenteMicrosoftImg from './Componentes/ComponenteMicrosoftImg';
import './MicrosoftLoginButton.css';

const MicrosoftLoginButton = ({ setUser }) => {
  const auth = getAuth(firebaseApp);
  const provider = new OAuthProvider('microsoft.com');

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      window.alert('Error al iniciar sesión con Microsoft', error);
    }
  };

  return (
    <button className="login-container" onClick={handleSignIn}>
      <ComponenteMicrosoftImg />
      <span className="microsoft-login-text">Inicia Sesión</span>
    </button>
  );
};

export default MicrosoftLoginButton;
