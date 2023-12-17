// perfil.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'; // Importa los métodos necesarios de Firebase

const PerfilPage = ({ user }) => {
  const navigate = useNavigate();
  const auth = getAuth(); // Obtén el objeto auth de Firebase

  const handleSignOut = async () => {
    try {
      // Utiliza el método signOut de Firebase Auth para cerrar sesión
      await signOut(auth);
      // Después del cierre de sesión, redirige a la página de inicio
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  console.log('Datos del Usuario en PerfilPage:', user);

  return (
    <div>
      <h1>Página de Perfil</h1>
      {user && (
        <div>
          <p>Usuario: {user.displayName}</p>
          <p>Correo electrónico: {user.email}</p>
          {/* Agrega más campos según sea necesario */}
          <button onClick={handleSignOut}>Cerrar Sesión</button>
        </div>
      )}
    </div>
  );
};

export default PerfilPage;
