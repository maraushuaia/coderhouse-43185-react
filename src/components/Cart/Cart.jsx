import React, {useContext} from 'react';
import {CartContext} from '../../contexts/ContextCartWidget';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from 'react-router-dom';

const Cart = () => {
  const {cartProducts, clearCart, getTotalPrice, removeFromCart} =
    useContext(CartContext);
  const navigate = useNavigate();

  const precioTotal = getTotalPrice();

  if (cartProducts.length === 0) {
    return (
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
        }}
      >
        <Box>
          <Typography variant='h5' align='center'>
            Tu carrito está vacío. ¡Te invitamos a explorar nuestros productos y
            realizar una compra!
          </Typography>
        </Box>
        <Box>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => navigate('/')}
          >
            Ir a Inicio
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        minHeight: '80vh',
      }}
    >
      <Grid container spacing={2} maxWidth='xl'>
        <Grid item xs={12} md={8} lg={8}>
          <Paper sx={{p: 2}}>
            <Grid container alignItems='center'>
              <Grid item xs={4}>
                <Typography variant='subtitle1'>Producto</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='subtitle1'>Cantidad</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='subtitle1'>Precio</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='subtitle1'>SubTotal</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='subtitle1'>Acción</Typography>
              </Grid>
            </Grid>
            {cartProducts.map((elemento) => (
              <Card key={elemento.id} style={{margin: '10px 0'}}>
                <CardContent>
                  <Grid container alignItems='center'>
                    <Grid item xs={4}>
                      <Typography>{elemento.name}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{elemento.quantity}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{elemento.price}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{elemento.price}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <IconButton onClick={() => removeFromCart(elemento.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Paper sx={{mx: {xs: 0, sm: 0, md: 3, xl: 3, lg: 3}}}>
            <Grid container alignItems='center' justifyContent='center'>
              <Grid item textAlign='center'>
                <Typography>Total de la compra:</Typography>
                <Typography>$ {precioTotal}</Typography>
              </Grid>
              <Grid
                item
                container
                justifyContent='center'
                spacing={2}
                direction={{
                  xs: 'column',
                  sm: 'column',
                  md: 'column',
                  lg: 'column',
                  xl: 'row',
                }}
              >
                <Grid item xs={6} sm={6} md={4} lg={6} xl={6} m={2}>
                  <Button variant='contained' color='primary' fullWidth>
                    Finalizar Compra
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={6} xl={6} m={2}>
                  <Button
                    variant='contained'
                    color='secondary'
                    onClick={clearCart}
                    fullWidth
                  >
                    Limpiar Carrito
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
