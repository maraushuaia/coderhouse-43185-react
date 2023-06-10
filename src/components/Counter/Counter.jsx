import React, {useState, useContext} from 'react';
import {Box, Button, Container, Typography} from '@mui/material';
import {Add, Remove} from '@mui/icons-material';
import {CartContext} from '../../contexts/ContextCartWidget';

const Counter = ({stock, idProduct, productData}) => {
  const [count, setCount] = useState(1);
  const {addToCart} = useContext(CartContext);

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

  const handleAddToCart = () => {
    addToCart(idProduct, count, productData); // Agregar el producto al carrito con la cantidad actual
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth='sm'>
        <Box marginTop={1} marginBottom={2} textAlign={'center'}>
          <Typography variant='subtitle2'>
            Unidades disponibles: {stock}
          </Typography>
        </Box>

        <Box display='flex' marginBottom={1} justifyContent={'center'}>
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

        <Box display='flex' justifyContent='center'>
          <Button variant='outlined' size='medium' onClick={handleAddToCart}>
            Agregar al Carrito
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Counter;
