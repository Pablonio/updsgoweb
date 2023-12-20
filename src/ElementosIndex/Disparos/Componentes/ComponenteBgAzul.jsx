import React, { useState, useEffect } from 'react';

const ComponenteBgAzul = () => {
  const [responsiveWidth, setResponsiveWidth] = useState(325);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Utiliza Math.min para tomar la dimensión más pequeña (ancho o alto)
      const smallestDimension = Math.min(screenWidth, screenHeight);

      if (smallestDimension > 900) {
        setResponsiveWidth(275);
      } else if (smallestDimension > 850) {
        setResponsiveWidth(225);
      } else if (smallestDimension > 710) {
        setResponsiveWidth(175);
      } else if (smallestDimension > 650) {
        setResponsiveWidth(150);
      } else if (smallestDimension > 480) {
        setResponsiveWidth(100);
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
      src="/assets/Bg3.png"
      alt="Parte azul"
      style={{ width: `${responsiveWidth}px` }}
    />
  );
};

export default ComponenteBgAzul;
