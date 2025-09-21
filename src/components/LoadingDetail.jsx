import React from 'react';
import '../Styles/loading.css';
import solosombrero from '../assets/sombreroGryffindor.gif'; 

const LoadingDetail = () => {
  return (
    <div className="loading-container">
      <img
        src={solosombrero}
        alt="El Sombrero Seleccionador está pensando..."
        className="loading-animation"
      />
      <p className="loading-text">¡Buscando personaje!</p>
    </div>
  );
};

export default LoadingDetail;