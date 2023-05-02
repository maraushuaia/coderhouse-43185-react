import {Box, Container} from '@mui/material';
import React from 'react';
import ProductSearch from '../Search/SearchContainer';

const ItemListContainer = () => {
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
