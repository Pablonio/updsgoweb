// En la página '/perfil'
import React, { useEffect } from 'react';

const PerfilPage = () => {
  useEffect(() => {
    // Recupera los datos del usuario del almacenamiento local
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log('Datos del usuario:', userData);

    // Limpia los datos del usuario del almacenamiento local
    localStorage.removeItem('userData');
  }, []);

  return (
    <div>
      {/* Renderiza la página '/perfil' */}
    </div>
  );
};

export default PerfilPage;
