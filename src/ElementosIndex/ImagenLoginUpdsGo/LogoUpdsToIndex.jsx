// LogoUpds.jsx
import React from 'react';
import ComponenteAzul from './Componentes/ComponenteAzul';
import ComponenteVerde from './Componentes/ComponenteVerde';
import ComponenteRojo from './Componentes/ComponenteRojo';
import PersonaUpds from './Componentes/PersonaUpds';
import './LogoUpdsToIndex.css';

const LogoUpds = () => {
  return (
    <div className='logo-container'>
      <div className='en-medio-izquierda-centro'>
        <div className='separacionAzulA'>
          <ComponenteAzul />
        </div>
        <div className='separacionAzulB'>
          <ComponenteAzul />
        </div>
      </div>
      <div className='centro'>
        <div className='verde-container'>
          <div className='separacionVerdeA'>
            <ComponenteVerde />
          </div>
          <ComponenteVerde />
          <div className='separacionVerdeB'>
            <ComponenteVerde />
          </div>
        </div>
        <div className='persona-abajo'>
          <PersonaUpds />
        </div>
      </div>
      <div className='en-medio-centro-derecha'>
        <div className='separacionAzulA'>
          <ComponenteAzul />
        </div>
        <div className='separacionAzulB'>
          <ComponenteAzul />
        </div>
      </div>
    </div>
  );
};

export default LogoUpds;
