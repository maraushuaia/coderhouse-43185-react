import {Box, Container} from '@mui/material';
import React from 'react';
import CardRender from '../Card/CardRender';

const ProductDetail = () => {
  const img ='https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667310/CoderHoseReact/habilitaciones_qgpbs6.png'
  const alt = 'Alt de la imagen'
  const price = 12
  const extract = 'Este es el extracto del producto'
  
  return (
    <Box>
        <Container 
        maxWidth="lg"
        sx={{
          backgroundColor: '#007590',
          display: 'flex',
          justifyContent: 'center'}}
        >
        <CardRender 
            img={img}
            alt={alt}
            price={price}
            extract={extract}
            variant='elevation'
             />
        </Container>
        <Container>
            <CardRender>
                
            </CardRender>
        </Container>
    </Box>
  );
};

export default ProductDetail;