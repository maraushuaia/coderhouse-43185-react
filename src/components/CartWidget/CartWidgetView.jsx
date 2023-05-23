// /***/
// /* Este componente se invoca unicamente desde el Navbar*/
// /***/
// import React from 'react';
// import {Badge} from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const CartWidgetView = ({color}) => {
//   return (
//     <div>
//       <Badge badgeContent={3} color='info'>
//         <ShoppingCartIcon color={color} />
//       </Badge>
//     </div>
//   );
// };

// export default CartWidgetView;

import React, { useContext } from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../contexts/CartWidgetProvider";

const CartWidgetView = ({ color }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    // Lógica para agregar un producto al carrito
    // Actualizar el estado cartItems
  };

  const handleRemoveFromCart = () => {
    // Lógica para remover un producto del carrito
    // Actualizar el estado cartItems
  };

  return (
    <div>
      <Badge badgeContent={cartItems.length} color="info">
        <ShoppingCartIcon color={color} />
      </Badge>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
      <button onClick={handleRemoveFromCart}>Remover del carrito</button>
    </div>
  );
};

export default CartWidgetView;
