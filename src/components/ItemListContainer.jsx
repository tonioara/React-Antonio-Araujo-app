import React, { useState, useEffect } from 'react';
import { collection, getDocs, query,where} from 'firebase/firestore';
import { db } from '../service/firebase';
import ItemList from './itemsList';


import TrenLoading from './TrenLoading';

import { useParams } from 'react-router-dom';

const houseBackgrounds = {
 
  Gryffindor: '/Img/Gryffindor.jpg',
  Slytherin: '/Img/Slytherin.jpg',   
  Hufflepuff: '/Img/Hufflepuff.jpg',
  Ravenclaw: '/Img/Ravenclaw.jpg',
};



function ItemListContainer({ mensajeBienvenida }) {

  const [loading, setLoading] = useState(true);
  const [dataApi, setDataApi] = useState([]);

  const {house} = useParams();
  
// FIREBASE 
  useEffect(() => {
    setLoading(true);
    
    const prodCollection = house 
      ? query(collection(db, 'productos'), where( "house", "==", house)) 
      : collection(db, 'productos')
    
    
    getDocs(prodCollection)
      .then((resp)=>{
        console.log(resp,'respuesta de firestore');
        const list = resp.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        
        setDataApi(list);

      })
      .catch((error) => {
        console.error("Hubo un error al obtener los datos:", error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [house]);

const HogwartsBackground = '/Img/HogwartsFondo.avif'; 


const backgroundImage = house ? `url(${houseBackgrounds[house]})` : `url(${HogwartsBackground})`;

  return (
    <>
      
      {
        loading ? <TrenLoading  /> 
        :
        <div 
          className="item-list-container" 
          style={{
           textAlign: 'center',
           backgroundImage: backgroundImage,
           backgroundSize: 'contain',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed',
           minHeight: '100vh',
           padding: '20px',
           }}>
        <h1 className="text-white">{mensajeBienvenida} {house && <span style={{textTransform:'capitalize' , }}>{house}</span>}</h1>
        <ItemList dataApi={dataApi} currentHouse={house} /> 
      </div>

      }
    </>
    
  );
}

export default ItemListContainer;