import React, { useState } from "react";
import FiltroCategoria from "../components/ItemListFilter/FiltroCategorias";
import Productos from "./Productos";

const Tienda = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div>
      <h1>Libros</h1>

      <FiltroCategoria onCategoriaChange={handleCategoriaChange} />

      <Productos categoriaSeleccionada={categoriaSeleccionada} />
    </div>
  );
};

export default Tienda;
