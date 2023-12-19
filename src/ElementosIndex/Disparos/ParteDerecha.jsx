import React from 'react';
import './ParteDerecha.css'; // Archivo de estilos para el componente
import ComponenteBgAzul from './Componentes/ComponenteBgAzul';
import ComponenteBgVerde from './Componentes/ComponenteBgVerde';
const ParteDerecha = () => {
  return (
    <div className='container-derecha-obj'>
        <div className='componente-azul-der-A'>
            <ComponenteBgAzul/>
        </div>
        <div className='componente-azul-der-B'>
            <ComponenteBgAzul/>
        </div>
        <div className='componente-verde'>
            <ComponenteBgVerde/>
        </div>
    </div>
  );
};

export default ParteDerecha;