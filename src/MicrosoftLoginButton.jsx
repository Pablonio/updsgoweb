// src/MicrosoftLoginButton.js
import React from 'react';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import { useHistory } from 'react-router-dom';  // Importa useHistory
import firebaseApp from './firebase-config';

const MicrosoftLoginButton = () => {
  const auth = getAuth(firebaseApp);
  const provider = new OAuthProvider('microsoft.com');
  const history = useHistory();  // Obtiene el objeto de historial

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);

      // Redirige a la página deseada después del inicio de sesión
      history.push('/perfil');  // Reemplaza '/perfil' con la ruta de tu página deseada
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
