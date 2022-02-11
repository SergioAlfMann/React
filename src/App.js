//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';



function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes> 
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} /> 
            <Route path="*" element={<div>Página no encontrada</div>} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );

}

export default App;
