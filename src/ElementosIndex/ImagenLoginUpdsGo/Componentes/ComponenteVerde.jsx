import React, { useState, useEffect } from 'react';
import './ComponenteVerde.css'; // Archivo de estilos para el componente

const ComponenteVerde = () => {
  const [responsiveWidth, setResponsiveWidth] = useState(70);
  const [responsiveHeight, setResponsiveHeight] = useState(65);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Utiliza Math.min para tomar la dimensión más pequeña (ancho o alto)
      const smallestDimension = Math.min(screenWidth, screenHeight);

      if (smallestDimension > 800) {
        setResponsiveWidth(65);
        setResponsiveHeight(60);
      } else if (smallestDimension > 700) {
        setResponsiveWidth(60);
        setResponsiveHeight(55);
      } else if (smallestDimension > 600) {
        setResponsiveWidth(55);
        setResponsiveHeight(50);
      } else if (smallestDimension > 500) {
        setResponsiveWidth(50);
        setResponsiveHeight(45);
      } else if (smallestDimension > 400) {
        setResponsiveWidth(45);
        setResponsiveHeight(40);
      } else if (smallestDimension > 300) {
        setResponsiveWidth(40);
        setResponsiveHeight(35);
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
      src="/assets/2.png"
      alt="Parte verde"
      className="responsive-image-verde"
      style={{ width: `${responsiveWidth}px`, height: `${responsiveHeight}px` }}
    />
  );
};

export default ComponenteVerde;
