// ComponenteMicrosoftImg.jsx
import React, { useState, useEffect } from 'react';
import './ComponenteMicrosoftImg.css';

const ComponenteMicrosoftImg = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Lista de rutas a tus imágenes
    const imageList = [
      '/assets/microsoft-logo.png',
      '/assets/MicrosoftLOg2.png',
      '/assets/MicrosoftLog3.png',
      '/assets/MicrosoftLog4.png',
    ];

    // Selecciona una imagen aleatoria
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];

    // Establece la imagen seleccionada en el estado
    setImageUrl(randomImage);
  }, []); // La dependencia vacía asegura que esto solo se ejecute una vez al montar el componente

  return (
    <img
      className="microsoft-logo"
      src={imageUrl}
      alt="Microsoft Logo"
    />
  );
};

export default ComponenteMicrosoftImg;

