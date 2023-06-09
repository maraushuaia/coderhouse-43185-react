import React, { useContext } from "react";
import { CartContext } from "../../contexts/ContextCartWidget";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartProducts, clearCart, getTotalPrice, removeFromCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const precioTotal = getTotalPrice();

  if (cartProducts.length === 0) {
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <Box>
          <Typography variant="h5" align="center" mb={2} p={1}>
            Tu carrito está vacío. ¡Te invitamos a explorar nuestros productos y
            realizar una compra!
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/")}
          >
            Ir a Inicio
          </Button>
        </Box>
      </Box>
    );
  }

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        minHeight: "80vh",
      }}
    >
      <Grid container spacing={2} maxWidth="xl">
        <Grid item xs={12} md={8} lg={8}>
          <Paper sx={{ p: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={1} sx={{ mr: { xs: 4 } }} />
              <Grid item xs={3} sx={{ mr: { xs: 2 } }}>
                <Typography variant="subtitle1">Producto</Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: { xs: "none", md: "flex", lg: "flex", xl: "flex" },
                }}
              >
                <Typography variant="subtitle1">Cantidad</Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: {
                    xs: "flex",
                    sm: "flex",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                }}
                mr={2}
              >
                <Typography variant="subtitle1">Cant.</Typography>
              </Grid>

              {/* Esta columna no se muestra en pantallas pequeñas */}
              <Grid
                item
                xs={2}
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
              >
                <Typography variant="subtitle1">Precio</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1">SubTotal</Typography>
              </Grid>
            </Grid>

            {cartProducts.map((elemento) => (
              <Card key={elemento.id} style={{ margin: "10px 0" }}>
                <CardContent>
                  <Grid container alignItems="center">
                    <Grid item xs={0.8} sx={{ mr: { xs: 4 } }}>
                      <IconButton onClick={() => removeFromCart(elemento.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs={3} sx={{ mr: { xs: 3 } }}>
                      <Typography>{elemento.name}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{elemento.quantity}</Typography>
                    </Grid>
                    {/* Esta columna no se muestra en pantallas pequeñas */}
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: {
                          xs: "none",
                          sm: "flex",
                          md: "flex",
                          lg: "flex",
                          xl: "flex",
                        },
                        mr: { xs: 4, sm: 2, md: 1, lg: 1, xl: 1 },
                      }}
                    >
                      <Typography>${elemento.price}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>
                        ${(elemento.price * elemento.quantity).toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Paper sx={{ mx: { xs: 0, sm: 0, md: 3, xl: 3, lg: 3 } }}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item textAlign="center" mt={2}>
                <Typography>Total de la compra:</Typography>
                <Typography>$ {precioTotal}</Typography>
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                spacing={2}
                direction={{
                  xs: "column",
                  sm: "column",
                  md: "column",
                  lg: "column",
                  xl: "row",
                }}
              >
                <Grid item xs={6} sm={6} md={4} lg={6} xl={6} m={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleCheckout}
                  >
                    Finalizar Compra
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={6} xl={6} m={2}>
                  <Button
                    variant="contained"
                    color="secondary"
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
