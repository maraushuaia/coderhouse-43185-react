/***/
/* Este componente se invoca unicamente desde el Navbar*/
/***/
import React from 'react';
import {Badge, IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartView = ({color}) => {
  console.log("Contenido de color: =>",color)
  return (
      <IconButton size='large' aria-label='show shopping' color={color}>
      <Badge badgeContent={3} color='info'>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartView;
