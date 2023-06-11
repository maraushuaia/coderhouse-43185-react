import React from 'react';
import {Container, Grid} from '@mui/material';
import CardProducts from '../components/Card/CardProducts';
import useFilterProducts from '../hooks/useFilterProducts';

import Loader from '../components/Loader/Loader';

const OfferPage = () => {
  const offerProducts = useFilterProducts({property: 'oferta', value: true});

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
          <Loader />
        )}
      </Grid>
    </Container>
  );
};

export default OfferPage;
