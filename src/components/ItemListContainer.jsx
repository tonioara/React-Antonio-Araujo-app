import React, { useState, useEffect } from 'react';
import ItemList from './itemsList';
import { ObtenerDatosApi } from '../mock/MockAsyncService';
import Gryffindor from '../assets/gryffindorFondo.1.jpg';
import Slytherin from '../assets/slytherinFondo.1.jpg';
import Hufflepuff from '../assets/hufflepuffFondo.jpg';
import Ravenclaw from '../assets/ravenclawFondo.jpg';
import Hogwarts from '../assets/HogwartsFondo.avif';

import TrenLoading from './TrenLoading';

import { useParams } from 'react-router-dom';
const houseBackgrounds = {
  Gryffindor: Gryffindor,
  Slytherin: Slytherin,
  Hufflepuff: Hufflepuff,
  Ravenclaw: Ravenclaw,
};

function ItemListContainer({ mensajeBienvenida }) {

  const [loading, setLoading] = useState(true);
  const [dataApi, setDataApi] = useState([]);

  const {house} = useParams();
  console.log(house);

  useEffect(() => {
    ObtenerDatosApi()
      .then(data => {
        if(house){

          const houseCharacters = data.filter(character => character.house === house);
          setDataApi(houseCharacters);
        } else{
          setDataApi(data);
        }
      })
      .catch(error => {
        console.error("Hubo un error al obtener los datos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [house]);

  if (loading) {
    return <TrenLoading  />;
  }
const backgroundImage = house ? `url(${houseBackgrounds[house]})` : 'url(' + Hogwarts + ')';
  
  return (
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
      }}
    >
      <h1 className="text-white">{mensajeBienvenida} {house && <span style={{textTransform:'capitalize' , }}>{house}</span>}</h1>
      <ItemList dataApi={dataApi} currentHouse={house} /> 
    </div>
  );
}

export default ItemListContainer;