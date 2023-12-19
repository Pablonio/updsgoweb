import React from 'react';
import LogoutButton from './LogOutButton';

const PerfilPage = ({ user, setUser }) => {
  console.log('Datos del Usuario en PerfilPage:', user);

  return (
    <div>
      <h1>Página de Perfil</h1>
      {user && (
        <div>
          <p>Usuario: {user.displayName}</p>
          <p>Correo electrónico: {user.email}</p>
          {/* Agrega más campos según sea necesario */}
          <LogoutButton setUser={setUser} />
        </div>
      )}
    </div>
  );
};

export default PerfilPage;
