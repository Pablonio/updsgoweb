import React from 'react';
import './ParteIzquierda.css'
import ComponenteBgAzul from './Componentes/ComponenteBgAzul';
import ComponenteBgRojo from './Componentes/ComponenteBgRojo';
const ParteIzquierda = () => {
  return (
    <div className='container-izqquierda-obj'>
        <div className='componente-rojo'>
            <ComponenteBgRojo/>
        </div>
        <div className='componente-azul-izq-A'>
            <ComponenteBgAzul/>
        </div>
        <div className='componente-azul-izq-B'>
            <ComponenteBgAzul/>
        </div>
    </div>
  );
};

export default ParteIzquierda;