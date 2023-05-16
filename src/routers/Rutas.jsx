import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarRender from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BarMobile from '../components/Navbar/BarMobile';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import HomePage from '../pages/Home';

const Rutas = () => {
  return (
    <BrowserRouter>
      <NavbarRender />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/itemDetail/:id' element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
      <BarMobile />
    </BrowserRouter>
  );
};

export default Rutas;
