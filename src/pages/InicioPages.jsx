import {Box, Typography} from '@mui/material';
import React from 'react';
import ProductCarousel from '../components/Carrusel/Carrusel';

const InicioPages = () => {
  return (
    <Box>
      <Typography variant='h1'>Página Inicio</Typography>

      <ProductCarousel />
    </Box>
  );
};

export default InicioPages;
