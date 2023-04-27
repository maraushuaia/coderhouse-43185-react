//Crear un componente que muestre un contador con botones para incrementar y decrementar el valor del contador
//El componente recibira un parametro para indicar el valor inicial del contador
//El componente recibira un parametro para indicar el valor maximo del contador
//Agregar un boton para resetear el contador a su valor inicial
//Mostrar el valor actual del contador

import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const CartCounter = ({ stock }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Box sx={{ display: { lg: "flex", alignItems: "center" } }}>
      <IconButton size="small" onClick={handleSubtract}>
        <Remove />
      </IconButton>
      <Typography sx={{ mx: 1 }}>{count}</Typography>
      <IconButton size="small" onClick={handleAdd} disabled={count === stock}>
        <Add />
      </IconButton>
    </Box>
  );
};

export default CartCounter;
