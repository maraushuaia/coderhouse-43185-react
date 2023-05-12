// //Con este componenten se muestra la lista de productos, se importa el archivo products.json y se muestra en pantalla
// //Se importa el componente ItemDetailView para mostrar el detalle del producto al hacer click en el mismo

import React, {useState, useEffect} from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  CardActionArea,
  Divider,
} from '@mui/material';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState([]);

  useEffect(() => {
    // fetch('http://administracion-shop.rodrigomunoz.com.ar/items/products')
    fetch('./products.json')
      .then((response) => response.json())
      // .then((data) => setProducts(data.data))
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (id) => {
    console.log(`Clicked product with id ${id}`);
    const selectedProduct = products.find((product) => product.id === id);
    if (selectedProduct && selectedProduct.status === 'published') {
      setProductSelected(selectedProduct);
      console.log('Detalles del Producto Seleccionado:=> ', productSelected);
    }
  };

  return (
    <Container maxWidth='xl' sx={{mt: 4}}>
      <Typography variant='h4' gutterBottom>
        Lista de productos
      </Typography>

      {products.length === 0 ? (
        <Box sx={{display: 'grid', justifyContent: 'center'}}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            display: 'grid',
          }}
          gridTemplateColumns={{
            xs: 'repeat(auto-fit, minmax(140px, 1fr))',
            sm: 'repeat(auto-fit, minmax(150px, 1fr))',
            md: 'repeat(auto-fit, minmax(180px, 1fr))',
            lg: 'repeat(auto-fit, minmax(190px, 1fr))',
          }}
          mb={2}
          gap={{xs: 1.5, sm: 2, md: 3, lg: 4}}
        >
          {products.map(
            (product) => (
              // product.status === 'published' ? (
              <CardActionArea
                key={product.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 5,
                }}
                onClick={() => handleClick(product.id)}
              >
                <Card sx={{flexGrow: 1}}>
                  <CardMedia
                    component='img'
                    // image={product.imageMain}
                    image={product.imgPrincipal}
                    alt={product.name}
                    sx={{
                      objectFit: 'contain',
                      height: {
                        xs: '90px',
                        sm: '110px',
                        md: '140px',
                        lg: '140px',
                      },
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />

                  <CardContent sx={{flexGrow: 1}}>
                    <Box
                      sx={{
                        height: {
                          xs: '35px',
                          sm: '40px',
                          md: '50px',
                          lg: '60px',
                        },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='h2'
                        sx={{
                          fontSize: {
                            xs: '1.4em',
                            sm: '1.5em',
                            md: '1.7em',
                            lg: '1.7em',
                          },
                        }}
                      >
                        {product.name}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        height: {
                          xs: '90px',
                          sm: '80px',
                          md: '70px',
                          lg: '80px',
                        },
                      }}
                    >
                      <Typography variant='body2' color='text.secondary'>
                        {product.description}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        height: {
                          xs: '30px',
                          sm: '50px',
                          md: '50px',
                          lg: '80px',
                        },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        pt: {xs: 3.5, sm: 1, md: 1, lg: 1},
                      }}
                    >
                      <Typography gutterBottom variant='h6' component='div'>
                        ${product.price}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </CardActionArea>
            )
            // ) : null
          )}
        </Box>
      )}
    </Container>
  );
};

export default ItemListContainer;
