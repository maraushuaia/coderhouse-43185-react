import React, {useContext, useState, useEffect} from 'react';
import {Container, Grid, Typography} from '@mui/material';
import {ProductContext} from '../contexts/ContextProducts';
import CardProducts from '../components/Card/CardProducts';

const OfferPage = () => {
  const {products} = useContext(ProductContext);

  const [offerProducts, setOfferProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => product.oferta);
    setOfferProducts(filteredProducts);
  }, [products]);

  return (
    <Container maxWidth='xl' sx={{mt: 4, minHeight: '80vh'}}>
      <Grid
        maxWidth='xl'
        container
        sx={{
          mt: 4,
          display: 'grid',
          justifyContent: 'left',
        }}
        gridTemplateColumns={{
          xs: 'repeat(auto-fit, minmax(140px, 1fr))',
          sm: 'repeat(auto-fit, minmax(150px, 1fr))',
          md: 'repeat(auto-fit, minmax(180px, 1fr))',
          lg: 'repeat(auto-fit, minmax(190px, 1fr))',
          xl: 'repeat(auto-fit, minmax(190px, 1fr))',
        }}
        mb={2}
        gap={{xs: 1.5, sm: 2, md: 3, lg: 2, xl: 2}}
      >
        {offerProducts.length > 0 ? (
          offerProducts.map((product) => (
            <CardProducts key={product.id} product={product} />
          ))
        ) : (
          <Typography variant='body1'>
            No hay productos en oferta en este momento.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default OfferPage;
