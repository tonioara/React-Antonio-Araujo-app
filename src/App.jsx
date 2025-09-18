
import NavBarHeader from './components/NavBarHeader'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';

function App() {
  

  return (
   <BrowserRouter>
    <NavBarHeader />
      <Routes>
        <Route path="/" element={ <ItemListContainer mensajeBienvenida='Bienvenida a la venta de tarjetas de Harry Potter' /> } />
        <Route path='/house/:house' element={<ItemListContainer mensaje="Estas en la casa de : "/>}/>
        <Route path="/Item/:itemId" element={ <ItemDetailContainer /> } />
        <Route path="*" element={ <Error404 />} />
      </Routes>
</BrowserRouter>
    
  )
}

export default App







