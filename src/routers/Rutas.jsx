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
import OfferPage from '../pages/OfferPage';
import FavoritesPage from '../pages/FavoritesPage';
import HelpPage from '../pages/HelpPage';
import NotificationsPage from '../pages/NotificationsPage';

const Rutas = () => {
  return (
    <BrowserRouter>
      <ProviderProducts>
        <ProviderCategories>
          <NavbarRender />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/categorias' element={<CategoriesPage />} />
            <Route path='/ofertas' element={<OfferPage />} />
            <Route path='/favoritos' element={<FavoritesPage />} />
            <Route path='/ayuda' element={<HelpPage />} />
            <Route path='/notificaciones' element={<NotificationsPage />} />
            <Route path='/itemDetail/:id' element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
          <BarMobile />
        </ProviderCategories>
      </ProviderProducts>
    </BrowserRouter>
  );
};

export default Rutas;
