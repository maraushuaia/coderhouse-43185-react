import React, {useContext} from 'react';
import {CartContext} from '../../contexts/ContextCartWidget';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const Cart = () => {
  const {cartProducts, clearCart, getTotalPrice} = useContext(CartContext);
  console.log('Cart Products: ', cartProducts);

  const precioTotal = getTotalPrice();

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        minHeight: '80vh',
      }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.map((elemento) => (
              <TableRow key={elemento.id}>
                <TableCell>{elemento.name}</TableCell>
                <TableCell>{elemento.quantity}</TableCell>
                <TableCell>{elemento.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h1>El total del carrito es: {precioTotal}</h1>
      <button onClick={clearCart}>Limpiar carrito</button>
    </Box>
  );
};

export default Cart;
