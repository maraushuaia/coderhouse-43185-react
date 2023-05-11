import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import NavbarRender from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BarMobile from '../components/Navbar/BarMobile';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const Rutas = () => {
  return (
    <BrowserRouter>
      <NavbarRender />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
      <BarMobile />
    </BrowserRouter>
  );
};

export default Rutas;
