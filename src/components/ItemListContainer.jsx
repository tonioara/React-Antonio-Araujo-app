import React, { useState, useEffect } from 'react';
import ItemList from './itemsList';
import { ObtenerDatosApi } from '../mock/MockAsyncService';

function ItemListContainer({ mensajeBienvenida }) {
//  const [dataApi, setDataApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataApi, setDataApi] = useState([]);

  // const [gryffindor, setGryffindor] = useState([]);
  // const [hufflepuff, setHufflepuff] = useState([]);
  // const [ravenclaw, setRavenclaw] = useState([]);
  // const [slytherin, setSlytherin] = useState([]); 

  useEffect(() => {
    ObtenerDatosApi()
      .then(data => {
        setDataApi(data);
        
        // console.log(data);
        // const gryffindorCharacters = data.filter(character => character.house === 'Gryffindor');
        // setGryffindor(gryffindorCharacters);
        // const hufflepuffCharacters = data.filter(character => character.house === 'Hufflepuff');
        // setHufflepuff(hufflepuffCharacters);
        // const ravenclawCharacters = data.filter(character => character.house === 'Ravenclaw');    
        // setRavenclaw(ravenclawCharacters);
        // const slytherinCharacters = data.filter(character => character.house === 'Slytherin');    
        // setSlytherin(slytherinCharacters);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los datos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  
  return (
    <div className="item-list-container" style={{ textAlign: 'center', backgroundColor:'silver' }}>
      <h1>{mensajeBienvenida}</h1>
      <ItemList dataApi={dataApi} />

      
      {/* <div className="gryffindor-section card p-3 mb-3">  */}
        {/* <h2 className="text-white bg-danger p-2 rounded">Gryffindor</h2>  */}
        {/* <ItemList dataApi={gryffindor} /> */}
      {/* </div> */}

{/*        */}
      {/* <div className="hufflepuff-section card p-3 mb-3">  */}
        {/* <h2 className="text-white bg-warning p-2 rounded">Hufflepuff</h2>  */}
        {/* <ItemList dataApi={hufflepuff} /> */}
      {/* </div> */}

{/*        */}
      {/* <div className="ravenclaw-section card p-3 mb-3">  */}
        {/* <h2 className="text-dark bg-primary p-2 rounded">Ravenclaw</h2>  */}
        {/* <ItemList dataApi={ravenclaw} /> */}
      {/* </div> */}

{/*        */}
      {/* <div className="slytherin-section card p-3 mb-3">  */}
        {/* <h2 className="text-white bg-success p-2 rounded">Slytherin</h2>  */}
        {/* <ItemList dataApi={slytherin} /> */}
      {/* </div> */}
    </div>
  );
}

export default ItemListContainer;