// import React, {useEffect, useState} from 'react';
// import {styled} from '@mui/system';
// import {Box, IconButton, Typography} from '@mui/material';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import imagenes from '../imagenes.json';

// const CarouselContainer = styled(Box)(({theme}) => ({
//   width: '100%',
//   height: '33vh',
//   position: 'relative',
//   overflow: 'hidden',
// }));

// const CarouselImage = styled('img')({
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
//   objectPosition: 'center',
// });

// const Overlay = styled(Box)(({theme}) => ({
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.common.white,
//   textAlign: 'center',
//   padding: theme.spacing(2),
//   boxSizing: 'border-box',
// }));

// const ArrowButton = styled(IconButton)(({theme}) => ({
//   position: 'absolute',
//   top: '50%',
//   transform: 'translateY(-50%)',
//   backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   color: theme.palette.common.white,
//   '&:hover': {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
// }));

// const ArrowLeft = styled(ArrowButton)({
//   left: 0,
// });

// const ArrowRight = styled(ArrowButton)({
//   right: 0,
// });

// const Carousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Simulate an API call to fetch the images from imagenes.json
//     const fetchImages = () => {
//       // Assuming imagenes.json is an array of image objects with "url" and "caption" properties
//       setImages(imagenes);
//     };

//     fetchImages();
//   }, []);

//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const currentImage = images[currentImageIndex];

//   return (
//     <CarouselContainer>
//       <CarouselImage src={currentImage?.url} alt={currentImage?.caption} />
//       <Overlay>
//         <Typography variant='h5'>{currentImage?.caption}</Typography>
//       </Overlay>
//       <ArrowLeft onClick={handlePrevImage}>
//         <KeyboardArrowLeftIcon />
//       </ArrowLeft>
//       <ArrowRight onClick={handleNextImage}>
//         <KeyboardArrowRightIcon />
//       </ArrowRight>
//     </CarouselContainer>
//   );
// };

// export default Carousel;

import React, {useContext} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Card, CardContent, Typography} from '@mui/material';
import {ContextProducts} from '../../contexts/ContextProducts';

const ProductCarousel = () => {
  const {products} = useContext(ContextProducts);
  console.log('Productos de ProductCarousel ', products);

  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      {products.map((product, index) => (
        <Card key={index}>
          <CardContent>
            <Typography variant='h6' gutterBottom>
              {product.name}
            </Typography>
            <Typography variant='body1'>{product.description}</Typography>
            <Typography variant='h6' color='primary'>
              ${product.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
