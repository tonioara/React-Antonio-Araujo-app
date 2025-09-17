
import { TiShoppingCart } from 'react-icons/ti';
import ItemsCart from './ItemsCart'; 
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function CartWidget() {
  
  return (
    <>
      <Button variant="link"  className="p-0 border-0">
        <TiShoppingCart size="2em" color="white" />
        <span style={{ color: 'white' }}>0</span>
      </Button>

    </>
  );
}

export default CartWidget;