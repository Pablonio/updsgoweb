import React from 'react';
import './DisparosToUnion.css'; // Archivo de estilos para el componente
import ParteIzqierda from './Partes/ParteIzquierda'
// Archivo de estilos para el componente
import ParteDerecha from './Partes/ParteDerecha'

const DisparosToUnion = () => {
  return (
    <div className='container-izquierda-derecha'>
        <div className='pos-izquierda'>
            <ParteIzqierda>

            </ParteIzqierda>
        </div>
        <div className='pos-derecha'>
            <ParteDerecha>
                
            </ParteDerecha>
        </div>
    </div>
  );
};

export default DisparosToUnion;