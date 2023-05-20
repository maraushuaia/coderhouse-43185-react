import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarRender from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BarMobile from '../components/Navbar/BarMobile';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import HomePage from '../pages/HomePage';
import CategoriesPage from '../pages/CategoriesPage';
import {ProviderProducts} from '../contexts/ProviderProducts';
import ProviderCategories from '../contexts/ProviderCategories';

const Rutas = () => {
  return (
    <BrowserRouter>
      <ProviderProducts>
        <ProviderCategories>
          <NavbarRender />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/categorias' element={<CategoriesPage />} />
            <Route path='/itemDetail/:id' element={<ItemDetailContainer />} />
            {/* <Route path='/:category' element={<ItemListFiltered />} /> */}
          </Routes>
          <Footer />
          <BarMobile />
        </ProviderCategories>
      </ProviderProducts>
    </BrowserRouter>
  );
};

export default Rutas;
