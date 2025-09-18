import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  const comprar = () => {
    if (count > 0 && stock > 0) {
      onAdd(count);
    }
  };
  
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 p-2">
  <div className="btn-group" role="group">
    <button 
      className="btn btn-outline-warning rounded" 
      onClick={restar} 
      disabled={count === 0}
    >
      -
    </button>
    <span className="btn btn-dark text-white rounded mx-2">
      {count}
    </span>
    <button 
      className="btn btn-outline-warning rounded" 
      onClick={sumar} 
      disabled={count === stock}
    >
      +
    </button>
  </div>
  <button 
    className="btn btn-success fw-bold ms-3" 
    onClick={comprar} 
    disabled={stock === 0 || count === 0}
  >
    Agregar al Carrito
  </button>
</div>
  );
};

export default ItemCount;