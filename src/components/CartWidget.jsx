
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

function CartWidget() {
  
  const { getTotalItems, cart }= useContext(CartContext);

  return (
    <Link to="/cart" className="btn p-0 border-0" style={{ textDecoration: 'none' }}>
      <TiShoppingCart size="2em" color="white" />
      {cart.length > 0 && <span style={{ color: 'white' }}>{getTotalItems()}</span>}
    </Link>
  );
}

export default CartWidget;