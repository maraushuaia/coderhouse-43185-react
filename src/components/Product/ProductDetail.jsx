import {Box, Container} from '@mui/material';
import React from 'react';
import CardRender from '../Card/CardRender';

const ProductDetail = () => {
  const img =
    'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667310/CoderHoseReact/habilitaciones_qgpbs6.png';
  const alt = 'Alt de la imagen';
  const price = 12;
  const extract = 'Este es el extracto del producto';

  return (
    <Box>
      <Container
        maxWidth='xl'
        sx={{
          width: '100%',
          display: 'grid',
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px',
        }}
      >
        <CardRender
          img={img}
          alt={alt}
          price={price}
          extract={extract}
          variant='elevation'
        />
        <CardRender
          img={img}
          alt={alt}
          price={price}
          extract={extract}
          variant='elevation'
        />
        <CardRender
          img={img}
          alt={alt}
          price={price}
          extract={extract}
          variant='elevation'
        />
        <CardRender
          img={img}
          alt={alt}
          price={price}
          extract={extract}
          variant='elevation'
        />
        <CardRender
          img={img}
          alt={alt}
          price={price}
          extract={extract}
          variant='elevation'
        />
        <CardRender
          img={img}
          alt={alt}
          price={price}
          extract={extract}
          variant='elevation'
        />
        <CardRender
          img={img}
          alt={alt}
          price={price}
          extract={extract}
          variant='elevation'
        />
        <CardRender
          img={img}
          alt={alt}
          price={price}
          extract={extract}
          variant='elevation'
        />
      </Container>
    </Box>
  );
};

export default ProductDetail;
