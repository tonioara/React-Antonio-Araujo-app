import React from 'react';
import Item from './Item';

function itemsList({ dataApi, currentHouse }) {
  return (
    <div className="cards-container d-flex flex-wrap justify-content-center gap-4 p-4">
      {dataApi.map((item) => (
        <Item key={item.id} item={item} currentHouse={currentHouse} />
      ))}
    </div>
  );
}

export default itemsList;