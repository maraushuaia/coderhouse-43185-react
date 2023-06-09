import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Box, Divider} from '@mui/material';

const CardRelatedProduct = ({imgPrincipal, price, extract}) => {
  console.log('Imagen Principal recibida CardRelatedProduct =>', imgPrincipal);

  const truncatedExtract =
    extract.length > 80 ? extract.substring(0, 80) + '...' : extract;

  return (
    <Box sx={{mx: 2, height: '100%'}}>
      <Card>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={imgPrincipal}
            sx={{mt: 2}}
          />
          <CardContent sx={{my: 1}}>
            <Typography gutterBottom variant='h5' component='div'>
              ${price}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {truncatedExtract}
            </Typography>
            <Divider sx={{my: 2}} />
            <Typography
              sx={{
                color: 'success.dark',
                display: 'inline',
                fontWeight: 'medium',
                mx: 0.5,
              }}
              variant='body2'
            >
              18.77%
            </Typography>
            <Typography
              sx={{color: 'text.secondary', display: 'inline', fontSize: 12}}
              variant='body2'
            >
              vs. last week
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default CardRelatedProduct;
