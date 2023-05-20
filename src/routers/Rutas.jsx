import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarRender from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BarMobile from '../components/Navbar/BarMobile';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import HomePage from '../pages/Home';
import ItemListFiltered from '../components/ItemListFilter/ItemListFiltered';
import GlobalProvider from '../context/GlobalProvider';

const Rutas = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <NavbarRender />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/itemDetail/:id' element={<ItemDetailContainer />} />
          <Route path='/:category' element={<ItemListFiltered />} />
        </Routes>
        <Footer />
        <BarMobile />
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default Rutas;
