import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarRender from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BarMobile from '../components/Navbar/BarMobile';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import HomePage from '../pages/HomePage';
import CategoriesPage from '../pages/CategoriesPage';
import OfferPage from '../pages/OfferPage';
import FavoritesPage from '../pages/FavoritesPage';
import HelpPage from '../pages/HelpPage';
import NotificationsPage from '../pages/NotificationsPage';
import UserView from '../components/User/UserView';
import ContextCartWidget from '../contexts/ContextCartWidget';
import ContextCategories from '../contexts/ContextCategories';
import {ContextProducts} from '../contexts/ContextProducts';
import Cart from '../components/Cart/Cart';
import NewFooter from '../components/Footer/NewFooter';

const Rutas = () => {
  return (
    <BrowserRouter>
      <ContextProducts>
        <ContextCategories>
          <ContextCartWidget>
            <NavbarRender />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/categorias' element={<CategoriesPage />} />
              <Route path='/ofertas' element={<OfferPage />} />
              <Route path='/favoritos' element={<FavoritesPage />} />
              <Route path='/ayuda' element={<HelpPage />} />
              <Route path='/notificaciones' element={<NotificationsPage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/user' element={<UserView />} />
              <Route path='/itemDetail/:id' element={<ItemDetailContainer />} />
            </Routes>
            <NewFooter />
            <Footer />
            <BarMobile />
          </ContextCartWidget>
        </ContextCategories>
      </ContextProducts>
    </BrowserRouter>
  );
};

export default Rutas;
