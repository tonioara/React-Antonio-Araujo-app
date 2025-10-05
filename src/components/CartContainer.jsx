import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartVacio from './CartVacio';
import CartView from './CartView';

function CartContainer() {
  const {cart} = useContext(CartContext);
  return (
     
    <>
      { !cart.length ? <CartVacio /> : <CartView /> }
    </>
  )
}

export default CartContainer