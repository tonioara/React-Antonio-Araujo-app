import React from 'react';

import '../Styles/loading.css';

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <img src='/Img/harry-potter-train.LOADING.gif' alt="Cargando..." className="loading-animation" />
      <p className="loading-text">¡Abordo del Expreso de Hogwarts!</p>
    </div>
  );
};

export default LoadingAnimation;