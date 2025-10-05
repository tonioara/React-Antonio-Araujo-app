import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import '../Styles/item.css';

const Item = ({item, currentHouse}) => {
   
 let cardClassName = "character-card";

  
  if (currentHouse) {
    cardClassName += ` card-${currentHouse.toLowerCase()}`; 
  }else{
    cardClassName += ` card-hogwarts`;
  }

  return (
    <Card  key={item.id} style={{ width: '18rem', margin: '1rem' }} className={cardClassName}>
      <Card.Img variant="top" className="img-fluid" style={{ height: '300px', objectfit: 'cover' }} src={item.image || 'https://via.placeholder.com/150'} alt={item.name} />
      <Card.Body>
       <Card.Title>{item.name}</Card.Title>
          <Card.Text>
           Casa: {item.house || 'Desconocida'}
          </Card.Text>
          <Card.Text>
          Especie: {item.species || 'Desconocida'}
          </Card.Text>
          <Card.Text>
           Precio: {item.price || 'Desconocida'}
          </Card.Text>
             <Link className='btn btn-dark' to={`/Item/${item.id}`}> Ver Más</Link>
      </Card.Body>
</Card>
  )
}

export default Item