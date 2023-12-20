import React, { useState, useEffect } from 'react';
import './ComponenteBgVerde.css'; // Archivo de estilos para el componente

const ComponenteBgVerde = () => {
  const [responsiveWidth, setResponsiveWidth] = useState(355);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Utiliza Math.min para tomar la dimensión más pequeña (ancho o alto)
      const smallestDimension = Math.min(screenWidth, screenHeight);

      if (smallestDimension > 900) {
        setResponsiveWidth(325);
      } else if (smallestDimension > 850) {
        setResponsiveWidth(255);
      } else if (smallestDimension > 710) {
        setResponsiveWidth(225);
      } else if (smallestDimension > 650) {
        setResponsiveWidth(175);
      } else if (smallestDimension > 480) {
        setResponsiveWidth(125);
      } else if (smallestDimension > 300) {
        setResponsiveWidth(50);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <img
      src="/assets/Bg2.png"
      alt="Parte verde"
      className="responsive-bg-verde"
      style={{ width: `${responsiveWidth}px` }}
    />
  );
};

export default ComponenteBgVerde;
