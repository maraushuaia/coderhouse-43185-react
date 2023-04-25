import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Stack, Box } from '@mui/material';

const CardRender = (props) => {
  const img = props.img;
  const alt = props.alt;
  const price = props.price;
  const extract = props.extract;

  return (
    <Box>
      <Card sx={{ maxWidth: 305}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={alt}
          sx={{mt:2}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {extract}
          </Typography>
        </CardContent>
        <Stack direction="row" spacing={2} justifyContent={'center'} sx={{mb:2}}>
        <Button variant="contained">Ver</Button>
        <Button variant="contained" color="secondary">Comprar</Button>
        </Stack>
      </CardActionArea>
    </Card>
    </Box>
  );
}

export default CardRender;