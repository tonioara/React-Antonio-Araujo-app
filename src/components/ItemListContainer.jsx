import React from 'react'

function ItemListContainer({mensajeBienvenida}) {
  return (
    <>
      <main expand="lg" style={{textAlign: 'center',backgroundColor: '#3b3c3dff', color: 'white',}}>
        <h1>Bienvenidos a la tienda de Harry Potter</h1>
        <h2>{mensajeBienvenida}</h2>
      </main>
        
    </>
  )
}

export default ItemListContainer