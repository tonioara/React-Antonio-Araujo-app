import React, { useState, useEffect } from 'react';
import { GetItemById } from '../mock/MockAsyncService';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import LoadingDetail from './LoadingDetail'; 

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();
  
  useEffect(() => {
    setLoading(true);

    GetItemById(itemId)
      .then(data => {
        setDetail(data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los detalles del personaje:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <LoadingDetail />; 
  }

  if (!detail) {
    return <p>Personaje no encontrado.</p>;
  }

  return (
    <div className="item-detail-container text-white" style={{ textAlign: 'center', backgroundColor:'#3b3f44ff', padding: '20px' }}>
      <h1>Detalles del Personaje</h1>
      <ItemDetail item={detail} />
    </div>
  );
};

export default ItemDetailContainer;