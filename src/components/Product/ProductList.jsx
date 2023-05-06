import React, {useState, useEffect} from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
} from '@mui/material';
import {dbProducts} from '../../products';

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(dbProducts);
    setLoading(false);
  }, []);

  return (
    <Container maxWidth='xl' sx={{mt: 4}}>
      <Typography variant='h4' gutterBottom>
        Lista de productos
      </Typography>
      {loading ? (
        <Box sx={{display: 'grid', justifyContent: 'center'}}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'grid',
            width: '100%',
            gridAutoRows: '1fr',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          gridTemplateColumns={{
            xs: 'repeat(auto-fit, minmax(170px, 1fr))',
            sm: 'repeat(auto-fit, minmax(180px, 1fr))',
            md: 'repeat(auto-fit, minmax(180px, 1fr))',
            lg: 'repeat(auto-fit, minmax(190px, 1fr))',
          }}
          gap={{xs: 3, sm: 1, md: 3, lg: 4}}
        >
          {products.map((product) => (
            <Box key={product.id}>
              <Card sx={{width: 190, height: 340}}>
                <CardMedia
                  component='img'
                  image={product.imgPrincipal}
                  alt={product.name}
                  sx={{
                    objectFit: 'contain',
                  }}
                />
                <CardContent sx={{flexGrow: 1}}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {product.name}
                  </Typography>
                  <Typography>{product.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='secondary'>
                    Ver detalles
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default ProductList;
