// import {useState} from 'react';
// import {Box, Container, Grid, Typography} from '@mui/material';
// // import CartCounter from '../CartCounter/CartCounter';
// // import CardRelatedProduct from '../Card/CardRelatedProduct';
// // import ItemDetailContainerView from './ItemDetailContainerView';
// import {useParams} from 'react-router-dom';
// import useSearchProducts from '../hooks/useSearchProducts';

// const ItemDetailContainer = () => {
//   const id = useParams();
//   const {products, loading} = useSearchProducts();
//   console.log(products);

//   return (
//     <Box
//       sx={{
//         marginBottom: 4,
//         backgroundColor: 'white',
//         borderRadius: '10px',
//         mt: 2,
//       }}
//     >
//       <Typography variant='h5' sx={{my: 2, ml: 2}}>
//         {products.name}
//       </Typography>
//       <Grid
//         container
//         sx={{
//           display: {xs: 'grid', sm: 'grid', md: 'flex'},
//           flexDirection: {xs: 'column', md: 'row'},
//           p: 2,
//         }}
//       >
//         <Grid item xs={12} sm={12} md={12} lg={8}>
//           {/* <ItemDetailContainerView
//             // name={productSelected.name}
//             // description={productSelected.descriptionshort}
//             // descriptionGeneral={productSelected.descriptionLong}
//             // price={productSelected.price}

//             images={product.imageAditional}
//           /> */}

//           <Typography variant='span' sx={{my: 2}}>
//             {products.descriptionLong}
//           </Typography>
//         </Grid>

//         <Grid item lg={4}>
//           <Typography
//             variant='h6'
//             sx={{color: 'primary.main', mb: 2}}
//             ml={{xs: 0, sm: 3, md: 3, lg: 3}}
//           >
//             {/* Precio ${productSelected.price} */}
//           </Typography>
//           {/* <CartCounter stock={productSelected.stock} /> */}
//         </Grid>
//       </Grid>
//       {/* <Grid item xs='colum'> */}
//       <Grid>
//         <Typography variant='h5' gutterBottom>
//           Te puede interesar
//         </Typography>

//         <Container maxWidth='lg'>
//           <Grid
//             sx={{
//               width: '100%',
//               display: 'grid',
//               justifyContent: 'center',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
//             }}
//             gap={{xs: 1, sm: 6, md: 6, lg: 6}}
//             mb={3}
//           >
//             {/* {related.map((relatedProduct) => (
//               <CardRelatedProduct
//                 key={relatedProduct.id}
//                 img={relatedProduct.img}
//                 imgPrincipal={relatedProduct.imgPrincipal}
//                 alt={relatedProduct.alt}
//                 price={relatedProduct.price}
//                 extract={relatedProduct.extract}
//                 variant={relatedProduct.variant}
//                 stock={relatedProduct.stock}
//               />
//             ))} */}
//             <h3>aca va</h3>
//           </Grid>
//         </Container>
//       </Grid>
//     </Box>
//   );
// };

// export default ItemDetailContainer;

import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import {useParams} from 'react-router-dom';
import useSearchProductID from '../hooks/useSearchProductID';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const {product, loading, error} = useSearchProductID(id);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
        {product.name}
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
          <Typography variant='span' sx={{my: 2}}>
            {product.descriptionLong}
          </Typography>
        </Grid>

        <Grid item lg={4}>
          <Typography
            variant='h6'
            sx={{color: 'primary.main', mb: 2}}
            ml={{xs: 0, sm: 3, md: 3, lg: 3}}
          >
            {/* Precio ${product.price} */}
          </Typography>
        </Grid>
      </Grid>
      <Grid>
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
            {/* Renderizar productos relacionados */}
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
};

export default ItemDetailContainer;
