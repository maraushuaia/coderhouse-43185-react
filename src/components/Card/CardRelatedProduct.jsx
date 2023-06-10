import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Box} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {styled} from '@mui/system';
import {useNavigate} from 'react-router-dom';

const GreenCircle = styled('div')({
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: 'green',
  color: 'white',
  width: 50,
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  fontWeight: 'bold',
});

const CardRelatedProduct = ({
  imgPrincipal,
  price,
  extract,
  id,
  oferta,
  isFavorite,
}) => {
  const navigate = useNavigate();

  const truncatedExtract =
    extract.length > 50 ? extract.substring(0, 50) + '...' : extract;

  const handleCardClick = () => {
    navigate(`/itemDetail/${id}`);
  };

  return (
    <Box sx={{mx: 1.5, mb: 3, height: '100%'}}>
      <Card sx={{height: '350px'}}>
        <CardActionArea onClick={handleCardClick}>
          <CardMedia
            component='img'
            height='140'
            image={imgPrincipal}
            sx={{mt: 2}}
          />
          {oferta && (
            <GreenCircle>
              <Typography variant='body2'>OFF</Typography>
            </GreenCircle>
          )}
          <CardContent sx={{my: 1}}>
            <Typography gutterBottom variant='h5' component='div'>
              ${price}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {truncatedExtract}
            </Typography>
            {isFavorite && (
              <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 2}}>
                <FavoriteIcon color='error' />
              </Box>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default CardRelatedProduct;
