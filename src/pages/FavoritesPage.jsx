import React, {useContext} from 'react';
import {ContextFavorites} from '../contexts/ContextFavorites';
import {Box, Container, Typography, Button, Grid} from '@mui/material';
import CardProducts from '../components/Card/CardProducts';
import {Link} from 'react-router-dom';

const FavoritesPage = () => {
  const {favorites} = useContext(ContextFavorites);

  if (favorites.length === 0) {
    return (
      <Container maxWidth='xl' sx={{mt: 4, minHeight: '80vh'}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 10,
          }}
        >
          <Typography variant='h4' align='center' gutterBottom>
            Todavía no agregaste ninguno.
          </Typography>
          <Typography variant='body1' align='center' gutterBottom>
            Ve a nuestro listado de productos, esperamos que muchos te gusten.
          </Typography>
          <Button
            component={Link}
            to='/'
            variant='contained'
            sx={{mt: 2}}
            color='secondary'
          >
            Ir a la página de inicio
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth='xl' sx={{mt: 4, minHeight: '80vh'}}>
      <Grid
        container
        sx={{
          mt: 4,
          display: 'flex',
          justifyContent: 'left',
          gap: 2,
        }}
      >
        {favorites.map((product) => (
          <CardProducts key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default FavoritesPage;
