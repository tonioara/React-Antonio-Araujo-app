import React, { useState, useEffect } from 'react';
import { GetItemById } from '../mock/MockAsyncService';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();
  console.log('ID del ítem:', itemId);

  useEffect(() => {
    GetItemById(itemId).then(data => {
        setDetail(data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los detalles del personaje:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]); 

  return (
    <div>
      {loading ? (
        <h2>Cargando detalles... ⏳</h2>
      ) : detail ? (
        
        
        <div className="item-detail-container" style={{ textAlign: 'center', backgroundColor:'silver', padding: '20px' }}>
          <h1>Detalles del Personaje</h1>
          
           <ItemDetail item={detail} /> 
        </div>
      ) : (
        <h2>Personaje no encontrado. 😔</h2>
      )}
    </div>
  );
}

export default ItemDetailContainer;