import React, { createContext, useState } from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map(prod =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
        )
      )
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  }

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  }
  
   const getTotalItems = () => {
    
    return cart.reduce((acc, item) => acc += item.quantity, 0);
  }

   const getTotalPrice = () => {
    
    return cart.reduce((acc, item) => acc += (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};