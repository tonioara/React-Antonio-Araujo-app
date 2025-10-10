import React from 'react';
import '../Styles/loading.css';
 

const LoadingDetail = () => {
  return (
    <div className="loading-container">
      <img
        src='/Img/solosombrero.gif'
        alt="El Sombrero Seleccionador está pensando..."
        className="loading-animation"
      />
      <p className="loading-text">¡Buscando personaje!</p>
    </div>
  );
};

export default LoadingDetail;