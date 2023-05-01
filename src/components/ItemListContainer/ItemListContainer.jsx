import {Box, Container} from '@mui/material';
import React from 'react';
import ProductSearch from '../Search/SearchContainer';

const ItemListContainer = () => {
  const img =
    'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667310/CoderHoseReact/habilitaciones_qgpbs6.png';
  const alt = 'Alt de la imagen';
  const price = 12;
  const extract =
    'Este es el extracto del producto para ver cuanto ocupa en espacio de letras.';

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth='md' sx={{mb: 2}}>
        <ProductSearch />
      </Container>
    </Box>
  );
};

export default ItemListContainer;
