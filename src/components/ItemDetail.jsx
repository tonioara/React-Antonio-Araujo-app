import React from 'react';
import ItemCount from './ItemCount';
import '../Styles/item.css';

const ItemDetail = ({ item }) => {
  const onAdd = (cantidad) => {
    console.log(`compraste ${cantidad} unidades de ${item.name}`);
  };

  if (!item) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          No se encontró el detalle del personaje.
        </div>
      </div>
    );
  }

  const house = item.house;
  let cardClassName = "card";
  if (house) {
    cardClassName += ` card-${house.toLowerCase()}-detail`;
  }

  const imageStyle = {
    width: '300px',
    height: '300px',
    objectFit: 'contain',
  };

  return (
    <div className="container my-5">
      <div className={`${cardClassName} shadow border-0`}>
        <div className="row g-0">
          <div className="col-md-6 d-flex align-items-center justify-content-center p-3">
            <img
              src={item.image}
              className="img-fluid rounded-start"
              style={imageStyle}
              alt={item.name}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body p-4 d-flex flex-column h-100">
              <h2 className="card-title text-uppercase fw-bold">{item.name}</h2>
              <hr className="bg-light" />
              <p className="card-text">
                
                <strong>Especie:</strong> {item.species}
              </p>
              <p className="card-text">
                
                <strong>Casa:</strong> {item.house}
              </p>
              <p className="card-text mb-4">
                
                <strong>Descripción:</strong> {item.description}
              </p>
              <div className="mt-auto">
                <p className="fs-3 fw-bold">
                  ${item.price.toFixed(2)}
                </p>
                <p className=" small">
                  Stock disponible: {item.stock} unidades
                </p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;