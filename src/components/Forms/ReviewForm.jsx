import React, {useContext} from 'react';
import {CartContext} from '../../contexts/ContextCartWidget';
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ReviewForm = ({shippingAddress, paymentData}) => {
  const {cartProducts, getTotalPrice, removeFromCart} = useContext(CartContext);

  const totalPrice = getTotalPrice();

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom my={2}>
        Resumen de la Compra
      </Typography>

      <Grid container spacing={2} maxWidth='xl'>
        <Grid item xs={12} md={12} lg={12}>
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
                      <Typography>${elemento.price}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>
                        ${(elemento.price * elemento.quantity).toFixed(2)}
                      </Typography>
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
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} mt={2}>
          <Typography variant='h6' gutterBottom>
            Enviar a
          </Typography>
          <Typography gutterBottom>
            {shippingAddress.firstName} {shippingAddress.lastName}
          </Typography>
          <Typography gutterBottom>{shippingAddress.address}</Typography>
          <Typography gutterBottom>
            {shippingAddress.city}, {shippingAddress.zip}
          </Typography>
          <Typography gutterBottom>{shippingAddress.country}</Typography>
        </Grid>

        <Grid item container direction='column' xs={12} sm={12} mt={2}>
          <Typography variant='h6' gutterBottom>
            Detalles del Pago
          </Typography>
          <Grid container>
            <Grid item xs={3}>
              <Typography gutterBottom>Nombre Tarjeta:</Typography>
              <Typography gutterBottom>Numero Tarjeta:</Typography>
              <Typography gutterBottom>Vencimiento:</Typography>
              <Typography gutterBottom>CVV:</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography gutterBottom>{paymentData.cardName}</Typography>
              <Typography gutterBottom>{paymentData.cardNumber}</Typography>
              <Typography gutterBottom>{paymentData.expDate}</Typography>
              <Typography gutterBottom>{paymentData.cvv}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Resumen del Pedido
          </Typography>
          <Typography gutterBottom>Total: ${totalPrice.toFixed(2)}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ReviewForm;
