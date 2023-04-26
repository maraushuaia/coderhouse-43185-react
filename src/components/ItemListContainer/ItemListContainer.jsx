import {Box} from '@mui/material';
import React from 'react';
import CardRender from '../Card/CardRender';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


const ItemListContainer = () => {
  const img ='https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667310/CoderHoseReact/habilitaciones_qgpbs6.png'
  const alt = 'Alt de la imagen'
  const price = 12
  const extract = 'Este es el extracto del producto para ver cuanto ocupa en espacio de letras.'
  
  return (
    <Box sx={{
      // backgroundColor: '#003590',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'center',

      }}>
     <CardRender 
     img={img}
     alt={alt}
     price={price}
     extract={extract}
     />
     {/* <ItemDetailContainer/> */}
     <CardRender 
     img={img}
     alt={alt}
     price={price}
     extract={extract}
     />
     <CardRender 
     img={img}
     alt={alt}
     price={price}
     extract={extract}
     />
     <CardRender 
     img={img}
     alt={alt}
     price={price}
     extract={extract}
     />
     <CardRender 
     img={img}
     alt={alt}
     price={price}
     extract={extract}
     />
     <CardRender 
     img={img}
     alt={alt}
     price={price}
     extract={extract}
     />
     <CardRender 
     img={img}
     alt={alt}
     price={price}
     extract={extract}
     />
     <CardRender 
     img={img}
     alt={alt}
     price={price}
     extract={extract}
     />
    </Box>
  );
};

export default ItemListContainer;
