import React, { useContext } from "react";
import { CartContext } from "../../contexts/ContextCartWidget";
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ReviewForm = ({ formData }) => {
  const { cartProducts, getTotalPrice, removeFromCart } =
    useContext(CartContext);

  const {
    firstName,
    lastName,
    address,
    phone,
    city,
    zip,
    country,
    state,
    cardName,
    cardNumber,
    cvv,
    expDate,
  } = formData;

  const totalPrice = getTotalPrice();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom my={2}>
        Resumen de la Compra
      </Typography>

      <Grid container spacing={2} maxWidth="xl">
        <Grid item xs={12} md={12} lg={12}>
          <Paper sx={{ p: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <Typography variant="subtitle1">Producto</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1">Cantidad</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1">Precio</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1">SubTotal</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1">Acción</Typography>
              </Grid>
            </Grid>
            {cartProducts.map((elemento) => (
              <Card key={elemento.id} style={{ margin: "10px 0" }}>
                <CardContent>
                  <Grid container alignItems="center">
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
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Enviar a
          </Typography>
          <Typography gutterBottom>
            {firstName} {lastName}
          </Typography>
          <Typography gutterBottom>{address}</Typography>
          <Typography gutterBottom>
            {city}, {zip}
          </Typography>
          <Typography gutterBottom>{country}</Typography>
        </Grid>

        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
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
              <Typography gutterBottom>{cardName}</Typography>
              <Typography gutterBottom>{cardNumber}</Typography>
              <Typography gutterBottom>{expDate}</Typography>
              <Typography gutterBottom>{cvv}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Resumen del Pedido
          </Typography>
          <Typography gutterBottom>Total: ${totalPrice.toFixed(2)}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ReviewForm;
