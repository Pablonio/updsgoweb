import React, { useState, useEffect } from 'react';
import './ComponenteAzul.css'; // Archivo de estilos para el componente

const ComponenteAzul = () => {
  const [responsiveWidth, setResponsiveWidth] = useState(60);
  const [responsiveHeight, setResponsiveHeight] = useState(55);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Utiliza Math.min para tomar la dimensión más pequeña (ancho o alto)
      const smallestDimension = Math.min(screenWidth, screenHeight);

      if (smallestDimension > 800) {
        setResponsiveWidth(55);
        setResponsiveHeight(50);
      } else if (smallestDimension > 700) {
        setResponsiveWidth(50);
        setResponsiveHeight(45);
      } else if (smallestDimension > 600) {
        setResponsiveWidth(45);
        setResponsiveHeight(40);
      } else if (smallestDimension > 500) {
        setResponsiveWidth(40);
        setResponsiveHeight(35);
      } else if (smallestDimension > 400) {
        setResponsiveWidth(35);
        setResponsiveHeight(30);
      } else if (smallestDimension > 300) {
        setResponsiveWidth(30);
        setResponsiveHeight(25);
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
      src="/assets/1.png"
      alt="Parte azul"
      className="responsive-image-azul"
      style={{ width: `${responsiveWidth}px`, height: `${responsiveHeight}px` }}
    />
  );
};

export default ComponenteAzul;
