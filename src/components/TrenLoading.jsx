import React from 'react';
import trenGif from '../assets/harry-potter-train.LOADING.gif'; 
import '../Styles/loading.css';

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <img src={trenGif} alt="Cargando..." className="loading-animation" />
      <p className="loading-text">¡Abordo del Expreso de Hogwarts!</p>
    </div>
  );
};

export default LoadingAnimation;