import React from 'react';
import '../Styles/ItemCart.css';

const ItemCart = ({ item, removeItem }) => {
  return (
    <>
       <div className="cart-item">
      <div className="item-details">
     
     <img src={item.image} alt={item.name} className="item-img" />
     <div>
       
       <p className="item-name">{item.name}</p>
       <p className="item-house">Casa: {item.house}</p>
       <p className="item-price">Precio: ${item.price}</p>
       <p className="item-quantity">Cantidad: {item.quantity}</p>
     </div>
   </div>
   <button onClick={() => removeItem(item.id)} className="btn-remove">
     Remover
   </button>
 </div>
    </>
 
  );
};

export default ItemCart;