import React, {useState, useContext} from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import {Link} from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {ContextFavorites} from '../../contexts/ContextFavorites';

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

  const {addFavorite, removeFavorite, isFavorite} =
    useContext(ContextFavorites);

  const [isProductFavorite, setIsProductFavorite] = useState(
    isFavorite(product.id)
  );

  const handleFavoriteClick = () => {
    if (isProductFavorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
    setIsProductFavorite(!isProductFavorite);
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
      <Card sx={{flexGrow: 1}}>
        <Link to={`/itemDetail/${product.id}`} style={{textDecoration: 'none'}}>
          <CardActionArea sx={{maxWidth: '220px'}}>
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
                position: 'relative',
              }}
            />
            {product.oferta && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'green',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant='body2' color='white'>
                  OFF
                </Typography>
              </Box>
            )}
            <CardContent sx={{flexGrow: 1}}>
              <Box
                sx={{
                  height: titleHeight,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                mb={4}
                mt={4}
              >
                <Typography
                  gutterBottom
                  variant='span'
                  sx={{
                    fontSize: '1.2em',
                  }}
                >
                  {product.name}
                </Typography>
              </Box>

              <Box
                sx={{height: descriptionHeight}}
                display={{
                  xs: 'none',
                  sm: 'none',
                  md: 'flex',
                  lg: 'flex',
                  xl: 'flex',
                }}
              >
                <Typography variant='body2' color='text.secondary'>
                  {product.descriptionShort.length > 70
                    ? product.descriptionShort.substring(0, 70) + '...'
                    : product.descriptionShort}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Link>
        <Divider />
        <Box
          display={'flex'}
          justifyContent={'center'}
          mt={{xs: 1, sm: 1, md: 1, lg: 1}}
          pr={1}
        >
          <IconButton
            aria-label='add to favorites'
            onClick={handleFavoriteClick}
            color={isProductFavorite ? 'error' : 'inherit'}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            height: priceHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography gutterBottom variant='h6' component='div'>
            ${product.price}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default CardProducts;
