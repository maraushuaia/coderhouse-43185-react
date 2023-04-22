import React from 'react';
import {Badge, IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartView = () => {
  return (
    <IconButton size='large' aria-label='show shopping' color='inherit'>
      <Badge badgeContent={3} color='info'>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartView;
