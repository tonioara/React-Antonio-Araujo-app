import React from 'react';
import Item from './Item';

function itemsList({ dataApi }) {
  return (
    <div className="cards-container d-flex flex-wrap justify-content-center gap-4 p-4 text-white">
      {dataApi.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default itemsList;