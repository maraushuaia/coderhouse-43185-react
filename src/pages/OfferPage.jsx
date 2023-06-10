import React, {useContext, useState, useEffect} from 'react';
import {Grid, Typography} from '@mui/material';
import {ProductContext} from '../contexts/ContextProducts';
import CardProducts from '../components/Card/CardProducts';

const OfferPage = () => {
  const {products} = useContext(ProductContext);
  console.log('Productos en Context Products: ', products);

  const [offerProducts, setOfferProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => product.oferta);
    setOfferProducts(filteredProducts);
  }, [products]);

  console.log('Productos en oferta: ', offerProducts);

  return (
    <Grid
      container
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'left',
        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr, 1fr, 1fr))',
      }}
      gap={{xs: 1, sm: 6, md: 6, lg: 6}}
      mb={3}
    >
      {offerProducts.length > 0 ? (
        offerProducts.map((product) => <CardProducts product={product} />)
      ) : (
        <Typography variant='body1'>
          No hay productos en oferta en este momento.
        </Typography>
      )}
    </Grid>
  );
};

export default OfferPage;
