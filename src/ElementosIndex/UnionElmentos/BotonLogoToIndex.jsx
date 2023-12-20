import React from 'react';
import LogoUpds from '../ImagenLoginUpdsGo/LogoUpdsToIndex';
import MicrosoftLoginButtoN from '../BotonLoginicrosoft/MicrosoftLoginButton';
import './BotonLogoToIndex.css'; 

const BotonLogoMicrosoft = () => {
  

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

export default BotonLogoMicrosoft;


