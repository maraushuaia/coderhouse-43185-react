import {Box} from '@mui/material';
import React from 'react';

const ItemListContainerView = ({greeting}) => {
  return (
    <Box>
      <h2>{greeting}</h2>
    </Box>
  );
};

export default ItemListContainerView;
