// src/MicrosoftLoginButton.js
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import firebaseApp from './firebase-config';
import { useNavigate } from 'react-router-dom';

const MicrosoftLoginButton = () => {
  const auth = getAuth(firebaseApp);
  const provider = new OAuthProvider('microsoft.com');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [redirectResult, setRedirectResult] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    return () => {
      // Cleanup function to set isMounted to false when component unmounts
      setIsMounted(false);
    };
  }, []);

  const handleSignIn = async () => {
    try {
      if (!isMounted) return; // Check if component is still mounted
      const result = await signInWithPopup(auth, provider);
      setRedirectResult(result); // Store result in state
    } catch (error) {
      console.error('Error al iniciar sesión con Microsoft', error);
      if (isMounted) {
        setErrorMessage('Algo salió mal. Por favor, inténtalo de nuevo.');
      }
    }
  };

  useEffect(() => {
    if (redirectResult) {
      navigate('/perfil', { state: redirectResult }); // Redirect after state update
    }
  }, [redirectResult, navigate]);

  return (
    <div>
      <button onClick={handleSignIn}>
        Bienvenido
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default MicrosoftLoginButton;
