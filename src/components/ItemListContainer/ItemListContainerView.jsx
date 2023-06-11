import React from 'react';
import {Box, Container} from '@mui/material';
import CardProducts from '../Card/CardProducts';
import Loader from '../Loader/Loader';

const ItemListContainerView = ({products, loading}) => {
  return (
    <Container maxWidth='xl' sx={{mt: 4}}>
      {loading ? (
        <Loader />
      ) : (
        <Box
          sx={{
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
          {products && products.length > 0 ? (
            products.map((product) => (
              <CardProducts key={product.id} product={product} />
            ))
          ) : (
            <Loader />
          )}
        </Box>
      )}
    </Container>
  );
};

export default ItemListContainerView;
