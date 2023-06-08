import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarRender from "../components/Navbar/Navbar";
import FooterFixer from "../components/Footer/FooterFixer";
import BarMobile from "../components/Navbar/BarMobile";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import HomePage from "../pages/HomePage";
import CategoriesPage from "../pages/CategoriesPage";
import OfferPage from "../pages/OfferPage";
import FavoritesPage from "../pages/FavoritesPage";
import HelpPage from "../pages/HelpPage";
import NotificationsPage from "../pages/NotificationsPage";
import UserView from "../components/User/UserView";
import ContextCartWidget from "../contexts/ContextCartWidget";
import ContextCategories from "../contexts/ContextCategories";
import { ContextProducts } from "../contexts/ContextProducts";
import { FavoritesProvider } from "../contexts/ContextFavorites";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import Error404 from "../pages/Error404";
import CheckoutPage from "../pages/CheckoutPage";

const Rutas = () => {
  return (
    <BrowserRouter>
      <ContextProducts>
        <ContextCategories>
          <ContextCartWidget>
            <FavoritesProvider>
              <NavbarRender />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/categorias" element={<CategoriesPage />} />
                <Route path="/ofertas" element={<OfferPage />} />
                <Route path="/favoritos" element={<FavoritesPage />} />
                <Route path="/ayuda" element={<HelpPage />} />
                <Route path="/notificaciones" element={<NotificationsPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/user" element={<UserView />} />
                <Route
                  path="/itemDetail/:id"
                  element={<ItemDetailContainer />}
                />
                <Route path="*" element={<Error404 />} />
              </Routes>
              <Footer />
              <FooterFixer />
              <BarMobile />
            </FavoritesProvider>
          </ContextCartWidget>
        </ContextCategories>
      </ContextProducts>
    </BrowserRouter>
  );
};

export default Rutas;
