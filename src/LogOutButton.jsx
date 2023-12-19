// LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const LogoutButton = ({ setUser }) => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Agrega este console.log
      navigate('/');
    } catch (error) {
      window.alert('Error al cerrar sesión:', error);
    }
  };

  return <button onClick={handleSignOut}>Cerrar Sesión</button>;
};

export default LogoutButton;
