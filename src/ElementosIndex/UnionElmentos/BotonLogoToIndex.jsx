import React, { useState, useEffect } from 'react';
import LogoUpds from '../ImagenLoginUpdsGo/LogoUpdsToIndex';
import MicrosoftLoginButtoN from '../BotonLoginicrosoft/MicrosoftLoginButton';
import './BotonLogoToIndex.css'; // Ajusta el nombre del archivo de estilos
import ParteIzquierda from '../Disparos/ParteIzquierda';
import ParteDerecha from '../Disparos/ParteDerecha';

const BotonLogoMicrosoft = () => {
  const [fixedBottomParteIzquierda, setFixedBottomParteIzquierda] = useState(0);
  const [fixedTopParteDerecha, setFixedTopParteDerecha] = useState(0);
  const [leftParteIzquierda, setLeftParteIzquierda] = useState('5%');
  const [rightParteDerecha, setRightParteDerecha] = useState('5%');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Utiliza Math.min para tomar la dimensión más pequeña (ancho o alto)
      const smallestDimension = Math.min(screenWidth, screenHeight);

      let calculatedBottomParteIzquierda = 0;

      if (smallestDimension > 800) {
        calculatedBottomParteIzquierda = screenHeight * 0.22;
        setFixedTopParteDerecha(screenHeight * 0.09);
        setLeftParteIzquierda('5%');
        setRightParteDerecha('5%');
      } else if (smallestDimension > 700) {
        calculatedBottomParteIzquierda = screenHeight * 0.30;
        setFixedTopParteDerecha(screenHeight * 0.08);
        setLeftParteIzquierda('2%');
        setRightParteDerecha('0.5%');
      } else if (smallestDimension > 600) {
        calculatedBottomParteIzquierda = screenHeight * 0.13;
        setFixedTopParteDerecha(screenHeight * 0.1);
        setLeftParteIzquierda('3%');
        setRightParteDerecha('3%');
      } else if (smallestDimension > 500) {
        calculatedBottomParteIzquierda = Math.abs(screenHeight * 0.02);
        setFixedTopParteDerecha(screenHeight * 0.22);
        setLeftParteIzquierda('4%');
        setRightParteDerecha('4%');
      } else if (smallestDimension > 400) {
        calculatedBottomParteIzquierda = screenHeight * 0.45;
        setFixedTopParteDerecha(screenHeight * 0.04);
        setLeftParteIzquierda('5%');
        setRightParteDerecha('5%');
      } else if (smallestDimension > 300) {
        calculatedBottomParteIzquierda = screenHeight * 0.50;
        setFixedTopParteDerecha(screenHeight * 0.21);
        setLeftParteIzquierda('5%');
        setRightParteDerecha('5%');
      }

      setFixedBottomParteIzquierda(calculatedBottomParteIzquierda);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='container-de-ambos'>
      <div className='parte-izq-container' style={{ bottom: `-${fixedBottomParteIzquierda}px`, left: leftParteIzquierda, right: 'auto', top: 'auto' }}>
        <ParteIzquierda />
      </div>
      <div className='logo-container'>
        <LogoUpds />
      </div>
      <div className='button-container'>
        <MicrosoftLoginButtoN />
      </div>
      <div className='parte-der-container' style={{ top: `-${fixedTopParteDerecha}px`, right: rightParteDerecha, left: 'auto', bottom: 'auto' }}>
        <ParteDerecha />
      </div>
    </div>
  );
};

export default BotonLogoMicrosoft;


