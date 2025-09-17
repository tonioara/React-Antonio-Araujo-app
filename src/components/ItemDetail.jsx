import React from 'react';


const ItemDetail = ({ item }) => {
  
  if (!item) {
    return <div>No se encontró el detalle del personaje.</div>;
  }

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h2>{item.name}</h2>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <p>
        <strong>Especie:</strong> {item.species}
      </p>
      <p>
        <strong>Casa:</strong> {item.house}
      </p>
      <p>
        <strong>Descripción:</strong> {item.description}
      </p>
      <p>
        <strong>Precio:</strong> ${item.price.toFixed(2)}
      </p>
      <p>
        <strong>Stock:</strong> {item.stock} unidades
      </p>
    </div>
  );
};

export default ItemDetail;