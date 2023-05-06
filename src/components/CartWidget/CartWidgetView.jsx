/***/
/* Este componente se invoca unicamente desde el Navbar*/
/***/
import React from 'react';
import {Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidgetView = ({color}) => {
  return (
    <div>
      <Badge badgeContent={3} color='info' sx={{mr: 2}}>
        <ShoppingCartIcon color={color} />
      </Badge>
    </div>
  );
};

export default CartWidgetView;
