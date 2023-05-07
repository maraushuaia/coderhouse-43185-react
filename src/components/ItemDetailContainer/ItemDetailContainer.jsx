// componente que muestra el detalle de un producto
// componente dentro de un contenedor box que es una card más grande que las otras
// color de fondo de la card principal #003590
// color de fondo de la card secundaria #007590
// import const CardRender = ({img, alt, price, extract, variant}) => {
// import React from 'react';
// import {Box, Container, Typography} from '@mui/material';
// import CartCounter from '../Contador/Contador';

import React, {useState} from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import CartCounter from '../CartCounter/CartCounter';
import DetalleDos from './DetalleDos';
import CardRelatedProduct from '../Card/CardRelatedProduct';

const ItemDetailContainer = ({productDetails, relatedProducts}) => {
  const [related, setRelated] = useState(relatedProducts);

  return (
    <Box
      sx={{
        marginBottom: 4,
        backgroundColor: 'white',
        borderRadius: '10px',
        mt: 2,
      }}
    >
      <Typography variant='h5' sx={{my: 2, ml: 2}}>
        {productDetails.name}
      </Typography>
      <Grid
        container
        sx={{
          display: {xs: 'grid', sm: 'grid', md: 'flex'},
          flexDirection: {xs: 'column', md: 'row'},
          p: 2,
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <DetalleDos
            name={productDetails.name}
            description={productDetails.description}
            descriptionGeneral={productDetails.descriptionGeneral}
            price={productDetails.price}
            images={productDetails.img}
          />
          <Typography variant='span' sx={{my: 2}}>
            {productDetails.descriptionGeneral}
          </Typography>
        </Grid>

        <Grid item lg={4}>
          <Typography
            variant='h6'
            sx={{color: 'primary.main', mb: 2}}
            ml={{xs: 0, sm: 3, md: 3, lg: 3}}
          >
            Precio ${productDetails.price}
          </Typography>
          <CartCounter stock={productDetails.stock} />
        </Grid>
      </Grid>
      <Grid item xs='colum'>
        <Typography variant='h5' gutterBottom>
          Te puede interesar
        </Typography>

        <Container maxWidth='lg'>
          <Grid
            sx={{
              width: '100%',
              display: 'grid',
              justifyContent: 'center',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            }}
            gap={{xs: 1, sm: 6, md: 6, lg: 6}}
            mb={3}
          >
            {related.map((relatedProduct) => (
              <CardRelatedProduct
                key={relatedProduct.id}
                img={relatedProduct.img}
                imgPrincipal={relatedProduct.imgPrincipal}
                alt={relatedProduct.alt}
                price={relatedProduct.price}
                extract={relatedProduct.extract}
                variant={relatedProduct.variant}
                stock={relatedProduct.stock}
              />
            ))}
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
};

export default ItemDetailContainer;
