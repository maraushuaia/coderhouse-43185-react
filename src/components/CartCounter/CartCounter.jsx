//Objetivos del Componente
//El componente muestra un contador con botones para incrementar y decrementar el valor del contador
//El componente recibira un parametro para indicar el valor inicial del contador
//El componente recibira un parametro para indicar el valor maximo del contador
//Agregar un boton para resetear el contador a su valor inicial
//Mostrar el valor actual del contador

import React, {useState} from 'react';
import {Box, Button, Container, Typography} from '@mui/material';
import {Add, Remove} from '@mui/icons-material';

const CartCounter = ({stock}) => {
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
    <Box
      sx={{
        display: {
          lg: 'block',
          alignItems: 'center',
          minWidth: '250px',
        },
      }}
    >
      <Container maxWidth='sm'>
        <Box marginTop={1} marginBottom={2}>
          <Typography variant='subtitle2'>
            Unidades disponibles: {stock}
          </Typography>
        </Box>

        <Box display={'flex'} marginBottom={3}>
          <Button variant='outlined' size='small' onClick={handleSubtract}>
            <Remove />
          </Button>
          <Typography sx={{mx: 3}}>{count}</Typography>
          <Button
            variant='outlined'
            size='small'
            onClick={handleAdd}
            disabled={count === stock}
          >
            <Add />
          </Button>
        </Box>

        <Box>
          <Button variant='outlined' size='medium' onClick={handleSubtract}>
            Agregar al Carrito
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CartCounter;
