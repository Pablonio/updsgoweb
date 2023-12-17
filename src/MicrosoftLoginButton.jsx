import React from 'react';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import firebaseApp from './firebase-config';

const MicrosoftLoginButton = ({ setUser }) => {
  const auth = getAuth(firebaseApp);
  const provider = new OAuthProvider('microsoft.com');

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Almacena la información del usuario en el estado
    } catch (error) {
      window.alert('Error al iniciar sesión con Microsoft', error);
    }
  };

  return (
    <button onClick={handleSignIn}>
      Bienvenido
    </button>
  );
};

export default MicrosoftLoginButton;
