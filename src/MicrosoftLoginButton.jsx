// src/MicrosoftLoginButton.js
import React from 'react';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import firebaseApp from './firebase-config';

const MicrosoftLoginButton = () => {
  const auth = getAuth(firebaseApp);
  const provider = new OAuthProvider('microsoft.com');

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.error('Error al iniciar sesión con Microsoft', error);
    }
  };

  return (
    <button onClick={handleSignIn}>
      Bienvenido
    </button>
  );
};

export default MicrosoftLoginButton;
