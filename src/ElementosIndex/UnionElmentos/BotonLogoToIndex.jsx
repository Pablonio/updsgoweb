import React from 'react';
import LogoUpds from '../ImagenLoginUpdsGo/LogoUpdsToIndex';
import MicrosoftLoginButtoN from '../BotonLoginicrosoft/MicrosoftLoginButton';
import './BotonLogoToIndex.css'; // Ajusta el nombre del archivo de estilos
import ParteIzquierda from '../Disparos/ParteIzquierda';
import ParteDerecha from '../Disparos/ParteDerecha';
const BotonLogoMicrosoft = () => {
  return (
    <div className='container-de-ambos'>
      <div className='parte-izq-container'>
        <ParteIzquierda/>
      </div>
      <div className='logo-container'>
        <LogoUpds />
      </div>
      <div className='button-container'>
        <MicrosoftLoginButtoN />
      </div>
      <div className='parte-der-container'>
        <ParteDerecha/>
      </div>
    </div>
  );
};

export default BotonLogoMicrosoft;

