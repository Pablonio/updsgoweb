import React, { useState, useEffect } from 'react';

const ComponenteRojo = () => {
  const [responsiveWidth, setResponsiveWidth] = useState(40);
  const [responsiveHeight, setResponsiveHeight] = useState(35);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Utiliza Math.min para tomar la dimensión más pequeña (ancho o alto)
      const smallestDimension = Math.min(screenWidth, screenHeight);

      if (smallestDimension > 500) {
        setResponsiveWidth(40);
        setResponsiveHeight(35);
      } else if (smallestDimension <= 500) {
        setResponsiveWidth(25);
        setResponsiveHeight(20);
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
      src="/assets/3.png"
      alt="Parte roja"
      style={{ width: `${responsiveWidth}px`, height: `${responsiveHeight}px` }}
    />
  );
};

export default ComponenteRojo;
