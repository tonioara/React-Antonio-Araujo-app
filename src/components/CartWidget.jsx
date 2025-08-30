import React from 'react'
import { TiShoppingCart } from "react-icons/ti";

function CartWidget() {
  return (
    <div>
      <TiShoppingCart size='2em' color="white"/>
      <span style={{color: 'white' }}>0</span>
    </div>
  )
}

export default CartWidget