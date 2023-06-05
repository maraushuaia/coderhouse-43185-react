import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';

const CardProducts = ({product}) => {
  const imageHeight = {
    xs: '90px',
    sm: '110px',
    md: '140px',
    lg: '140px',
  };

  const titleHeight = {
    xs: '35px',
    sm: '40px',
    md: '50px',
    lg: '60px',
  };

  const descriptionHeight = {
    xs: '90px',
    sm: '80px',
    md: '70px',
    lg: '80px',
  };

  const priceHeight = {
    xs: '30px',
    sm: '50px',
    md: '50px',
    lg: '80px',
  };

  const titleFontSize = {
    xs: '1.4em',
    sm: '1.5em',
    md: '1.7em',
    lg: '1.7em',
  };

  return (
    <Box
      key={product.id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 5,
        maxWidth: '220px',
      }}
    >
      <CardActionArea sx={{maxWidth: '220px'}}>
        <Card sx={{flexGrow: 1}}>
          <CardMedia
            component='img'
            image={product.imageMain}
            alt={product.name}
            sx={{
              objectFit: 'contain',
              height: imageHeight,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />

          <CardContent sx={{flexGrow: 1}}>
            <Box
              sx={{
                height: titleHeight,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                gutterBottom
                variant='h5'
                sx={{
                  fontSize: titleFontSize,
                }}
              >
                {product.name}
              </Typography>
            </Box>

            <Box sx={{height: descriptionHeight}}>
              <Typography variant='body2' color='text.secondary'>
                {product.descriptionshort}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                height: priceHeight,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pt: {xs: 3.5, sm: 1, md: 1, lg: 1},
              }}
            >
              <Typography gutterBottom variant='h6' component='div'>
                ${product.price}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </CardActionArea>
    </Box>
  );
};

export default CardProducts;
