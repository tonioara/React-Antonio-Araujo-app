import React, { useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import ItemsCart from './ItemsCart'; 
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function CartWidget() {
  const [show, setShow] = useState(false);

  const handleClose = () => 
    {
      setShow(false)
      console.log('cerrando carrito');
    }
  const handleShow = () => 
    {
    setShow(true);
    console.log('abriendo carrito');
  }

  return (
    <>
      <Button variant="link" onClick={handleShow} className="p-0 border-0">
        <TiShoppingCart size="2em" color="white" />
        <span style={{ color: 'white' }}>0</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className='bg-dark text-white btn-close-white'>
          <Offcanvas.Title>Tu Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='p-0'>
          <ItemsCart />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartWidget;