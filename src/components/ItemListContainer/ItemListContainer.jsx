import {Box} from '@mui/material';
import React from 'react';
import CardRender from '../Card/CardRender';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemListContainer = () => {
  const img ='https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667310/CoderHoseReact/habilitaciones_qgpbs6.png'
  const alt = 'Alt de la imagen'
  const price = 12
  const extract = 'Este es el extracto del producto'
  
  return (
    <Box>
     <CardRender 
     img={img}
     alt={alt}
     price={price}
     extract={extract}
     />

     <ItemDetailContainer/>
    </Box>
  );
};

export default ItemListContainer;
