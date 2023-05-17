import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import React from 'react';

const CardProducts = ({product}) => {
  return (
    <CardActionArea
      key={product.id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 5,
      }}
    >
      <Card sx={{flexGrow: 1}}>
        <CardMedia
          component='img'
          image={product.imageMain}
          alt={product.name}
          sx={{
            objectFit: 'contain',
            height: {
              xs: '90px',
              sm: '110px',
              md: '140px',
              lg: '140px',
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />

        <CardContent sx={{flexGrow: 1}}>
          <Box
            sx={{
              height: {
                xs: '35px',
                sm: '40px',
                md: '50px',
                lg: '60px',
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              gutterBottom
              variant='h5'
              // component='h2'
              sx={{
                fontSize: {
                  xs: '1.4em',
                  sm: '1.5em',
                  md: '1.7em',
                  lg: '1.7em',
                },
              }}
            >
              {product.name}
            </Typography>
          </Box>

          <Box
            sx={{
              height: {
                xs: '90px',
                sm: '80px',
                md: '70px',
                lg: '80px',
              },
            }}
          >
            <Typography variant='body2' color='text.secondary'>
              {product.descriptionshort}
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              height: {
                xs: '30px',
                sm: '50px',
                md: '50px',
                lg: '80px',
              },
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
  );
};

export default CardProducts;
