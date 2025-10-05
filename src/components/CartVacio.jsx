import React from 'react';
import { Link } from 'react-router-dom';

const CartVacio = () => {
  return (
    
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#1d1c1cff' }}>
      <div className="text-center p-5 rounded shadow" style={{ maxWidth: '650px', backgroundColor: '#4e02026c', border: '2px solid #fdfdfdff' }}>
        <h2 className="h1 mb-4" style={{ color: '#e2e2e1ff' }}>Tu colección de cartas está vacía</h2>
        <p className="lead" style={{ color: '#b8b4adff' }}>
          Aún no has agregado ninguna tarjeta ....
        </p>
        <p className="lead" style={{ color: '#b4b4b4ff' }}>
          ¡Regresa y encuentra las cartas para completar tu mazo!
        </p>
        <Link to="/" className="btn mt-4" style={{ backgroundColor: '#D3A625', color: '#0E1A40', borderColor: '#D3A625' }}>
          Explorar las cartas
        </Link>
      </div>
    </div>
  );
};

export default CartVacio;