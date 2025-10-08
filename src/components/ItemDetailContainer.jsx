import React, { useState, useEffect } from 'react';
import { GetItemById } from '../mock/MockAsyncService';
import ItemDetail from './ItemDetail';
import { Link, useParams } from 'react-router-dom';
import LoadingDetail from './LoadingDetail'; 
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../service/firebase';

const ItemDetailContainer = () => {
  
 const [detail, setDetail] = useState(null);
 const [loading, setLoading] = useState(true);
 const [inValidId, setInvalidId] = useState(null);
 const { itemId } = useParams();


   const containerStyle = { 
    textAlign: 'center', 
    backgroundColor: '#3b3f44ff', 
    padding: '20px',
    
    minHeight: '100vh', 
    color: 'white' ,
  };

  useEffect(() => {
    setLoading(true);
    const docRef= doc(db, 'productos', itemId)
    getDoc(docRef)
    .then((resp)=>{
      if(resp.data()){
        setDetail({id: resp.id, ...resp.data()})
      }
      else{
        setInvalidId(true)
      }})
      .catch((error) => {
        console.error("Hubo un error al obtener los detalles del personaje:", error);
      })
      .finally(() => {
        setLoading(false);
     })

    
  }, [itemId]);

  

if(inValidId){
  return (
    <div 
      className="item-detail-container d-flex flex-column justify-content-center align-items-center text-white" 
      style={{ 
        backgroundColor: '#3b3f44ff', 
        minHeight: '100vh',
        width: '100%', 
        padding: '20px' 
      }}
    >
      <h1>ID de personaje no válido</h1>
      <p>El ID proporcionado no corresponde a ningún personaje. Por favor, verifica el enlace o regresa a la página principal.</p>
      <Link to='/' className="btn btn-primary mt-3">Volver al Inicio</Link>
    </div>
  );
}

  return (
    <>
     <div className="item-detail-container" style={containerStyle}>
        
        {!inValidId && (
            loading ? <LoadingDetail />
            : detail && (
                <>
                    <h1>Detalles del Personaje</h1>
                    <ItemDetail item={detail} />
                </>
            )
        )}
      </div>

    </>
    
    
    
    
  )

};

export default ItemDetailContainer;