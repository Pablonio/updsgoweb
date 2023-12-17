import React from 'react';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import firebaseApp from './firebase-config';
import { useNavigate } from 'react-router-dom';

const MicrosoftLoginButton = () => {
  const auth = getAuth(firebaseApp);
  const provider = new OAuthProvider('microsoft.com');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      
      // Redirige a la página de perfil después del inicio de sesión
      navigate('/perfil');
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
