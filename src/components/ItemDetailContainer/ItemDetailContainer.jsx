// componente que muestra el detalle de un producto
// componente dentro de un contenedor box que es una card más grande que las otras
// color de fondo de la card principal #003590
// color de fondo de la card secundaria #007590
// import const CardRender = ({img, alt, price, extract, variant}) => {
// import React from 'react';
// import {Box, Container, Typography} from '@mui/material';
// import CartCounter from '../Contador/Contador';

import React, {useState} from 'react';
import {Box, Card, Container, Grid, Typography} from '@mui/material';
import CardRender from '../Card/CardRender';
import CartCounter from '../CartCounter/CartCounter';
import CarruselProductos from '../Carrusel/CarruselView';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import DetalleDos from './DetalleDos';

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
      <Grid
        container
        sx={{
          display: {md: 'flex'},
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
          <Typography variant='h6' sx={{color: 'primary.main', mb: 2}}>
            Precio ${productDetails.price}
          </Typography>
          <CartCounter stock={productDetails.stock} />
        </Grid>
      </Grid>

      <Box p={2}>
        <Typography variant='h5' sx={{marginTop: 4}} gutterBottom>
          Productos relacionados
        </Typography>

        <Container maxWidth='lg'>
          <Box
            sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}
          >
            {related.map((relatedProduct) => (
              <CardRender
                key={relatedProduct.id}
                img={relatedProduct.img}
                alt={relatedProduct.alt}
                price={relatedProduct.price}
                extract={relatedProduct.extract}
                variant={relatedProduct.variant}
                stock={relatedProduct.stock}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ItemDetailContainer;
