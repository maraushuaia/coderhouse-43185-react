import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(products);
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  console.log(products);
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de productos
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography>{product.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Agregar al carrito
                </Button>
                <Button size="small" color="secondary">
                  Ver detalles
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
