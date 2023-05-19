import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarRender from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BarMobile from "../components/Navbar/BarMobile";
import Tienda from "../pages/Categories";

const Rutas = () => {
  return (
    <BrowserRouter>
      <NavbarRender />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<Tienda />} />
        {/* <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/:category" element={<ItemListFiltered />} /> */}
      </Routes>
      <Footer />
      <BarMobile />
    </BrowserRouter>
  );
};

export default Rutas;
