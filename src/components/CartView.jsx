import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartVacio from './CartVacio';
import ItemCart from './ItemCart';
import '../Styles/CartView.css';
import { Link } from 'react-router-dom';

const CartView = () => {
  const { cart, removeItem, clearCart,getTotalPrice } = useContext(CartContext);

  const total = getTotalPrice();

  return (
    <div className="cart-view-container">
      
      
      <div className="cart-products-list">
        <h2>Tu Colección Mágica</h2>
        {cart.map(item => (
          
          <ItemCart key={item.id} item={item} removeItem={removeItem} />
        ))}
      </div>

      
      <div className="cart-summary">
        <h2>Resumen de la Orden</h2>
        <div className="summary-item">
          <p>Total de productos:</p>
          <p>{cart.length}</p>
        </div>
        <div className="summary-item total">
          <p>Total a pagar:</p>
          <p>${total}</p>
        </div>
        <div className="cart-actions"> 
             <button onClick={clearCart} className="btn-clear">
                 Vaciar Carrito
             </button>
             <Link to="/checkout" className="btn-checkout">
                 Proceder a Pagar
             </Link>
        </div>
      </div>

    </div>
  );
};

export default CartView;