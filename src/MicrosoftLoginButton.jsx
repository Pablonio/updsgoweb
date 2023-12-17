// src/MicrosoftLoginButton.js
import React from 'react';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Cambia useHistory por useNavigate
import firebaseApp from './firebase-config';

const MicrosoftLoginButton = () => {
  const auth = getAuth(firebaseApp);
  const provider = new OAuthProvider('microsoft.com');
  const navigate = useNavigate(); // Cambia history por navigate

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);

      // Redirige a la página deseada después del inicio de sesión
      navigate('/perfil'); // Reemplaza '/perfil' con la ruta de tu página deseada
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

