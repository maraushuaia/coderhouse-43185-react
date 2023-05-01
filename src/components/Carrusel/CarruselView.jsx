// import React, {useState, useEffect} from 'react';
// import {Box, Container, Typography} from '@mui/material';
// import CardRender from '../Card/CardRender';
// import CartCounter from '../CartCounter/CartCounter';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const CarruselProductos = ({productRelated}) => {
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     // Lógica para obtener los productos relacionados
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 960,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Box sx={{backgroundColor: '#003590', py: 5}}>
//       <Container sx={{maxWidth: 'md'}}>
//         <Box
//           sx={{
//             backgroundColor: '#007590',
//             display: 'flex',
//             flexDirection: {xs: 'column', md: 'row'},
//             justifyContent: 'space-between',
//             p: 2,
//           }}
//         >
//           <CardRender product={productRelated} />
//           <Box
//             sx={{
//               mt: {xs: 2, md: 0},
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             <CartCounter stock={productRelated.stock} />
//           </Box>
//         </Box>
//         <Box sx={{mt: 5}}>
//           <Typography variant='h5' sx={{mb: 2}}>
//             Productos relacionados
//           </Typography>
//           <Slider {...settings}>
//             {relatedProducts.map((relatedProduct) => (
//               <CardRender
//                 key={relatedProduct.id}
//                 product={relatedProduct}
//                 variant='related'
//               />
//             ))}
//           </Slider>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default CarruselProductos;
