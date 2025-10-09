import NavBarHeader from './components/NavBarHeader';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import { CartProvider } from './context/CartContext'; 
import CartContainer from './components/CartContainer';
import Footer from './components/Footer';
import CheckoutFORM from './components/CheckoutFORM';

function App() {
  return (
    <BrowserRouter>
    <div className="app-container"> 
        <CartProvider>
          <NavBarHeader />
           <div className="main-content-wrapper">
            <Routes>
              <Route path="/" element={<ItemListContainer mensajeBienvenida='Bienvenida a la venta de tarjetas de Harry Potter' />} />
              <Route path='/house/:house' element={<ItemListContainer mensaje="Estas en la casa de : " />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/Item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/checkoutFORM" element={<CheckoutFORM />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
          
          <Footer />
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;






