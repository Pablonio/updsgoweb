import React from 'react';
import LogoUpds from './Componentes/LogoUpdsToIndex';
import MicrosoftLoginButtoN from '../BotonLoginicrosoft/MicrosoftLoginButton';
import './BotonLogoToIndex.css'; // Ajusta el nombre del archivo de estilos

const BotonLoginMicrosoft = () => {
  return (
    <div className='container-de-ambos'>
      <div className='logo-container'>
        <LogoUpds />
      </div>
      <div className='button-container'>
        <MicrosoftLoginButtoN />
      </div>
    </div>
  );
};

export default BotonLoginMicrosoft;

