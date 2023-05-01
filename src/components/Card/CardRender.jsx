import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Button, Stack, Box, Divider} from '@mui/material';

const CardRender = (props) => {
  const img = props.img;
  const alt = props.alt;
  const price = props.price;
  const extract = props.extract;

  return (
    <Box sx={{mx: 2}}>
      <Card>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={img}
            alt={alt}
            sx={{mt: 2}}
          />
          <CardContent sx={{my: 1}}>
            <Typography gutterBottom variant='h5' component='div'>
              ${price}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {extract}
            </Typography>
            <Divider sx={{my: 2}} />
            <Box
              sx={{
                color: 'success.dark',
                display: 'inline',
                fontWeight: 'medium',
                mx: 0.5,
              }}
            >
              18.77%
            </Box>
            <Box
              sx={{color: 'text.secondary', display: 'inline', fontSize: 12}}
            >
              vs. last week
            </Box>
          </CardContent>
          <Stack
            direction='row'
            spacing={2}
            justifyContent={'center'}
            sx={{mb: 2}}
          >
            <Button variant='contained'>Ver</Button>
            <Button variant='contained' color='secondary'>
              Comprar
            </Button>
          </Stack>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default CardRender;
