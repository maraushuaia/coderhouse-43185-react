import React, {useContext, useState} from 'react';
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import {useParams} from 'react-router-dom';
import useSearchProductID from '../../hooks/useSearchProductID';
import CardImages from '../Card/CardImages';
import Counter from '../Counter/Counter';
import CardRelatedProduct from '../Card/CardRelatedProduct';
import {ProductContext} from '../../contexts/ContextProducts';
import {ContextFavorites} from '../../contexts/ContextFavorites';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const {product, loading, error} = useSearchProductID(id);
  const {products} = useContext(ProductContext);
  const {favorites, addFavorite, removeFavorite} = useContext(ContextFavorites);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    addFavorite(product);
    setIsFavorite(true);
    toast.success('Producto agregado a favoritos', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleRemoveFromFavorites = () => {
    removeFavorite(product.id);
    setIsFavorite(false);
    toast.error('Producto eliminado de favoritos', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (loading) {
    return (
      <Box sx={{display: 'grid', justifyContent: 'center'}}>
        <CircularProgress />
        loading...
      </Box>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Filtrar productos relacionados por categoría, excluyendo el producto actual
  const relatedProducts = products.filter(
    (relatedProduct) =>
      relatedProduct.category === product.category &&
      relatedProduct.id !== product.id
  );

  return (
    <Container maxWidth='xl' sx={{mt: 4}}>
      <Box
        sx={{
          marginBottom: 4,
          backgroundColor: 'white',
          borderRadius: '10px',
          mt: 2,
        }}
      >
        <Typography variant='h5' sx={{ml: 2, mb: 2}}>
          {product.name}
        </Typography>
        <Grid
          container
          sx={{
            display: {xs: 'grid', sm: 'grid', md: 'flex'},
            flexDirection: {xs: 'column', md: 'row'},
          }}
        >
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <CardImages images={product.imageAditional} />
            <Box px={1.5}>
              <Typography variant='span'>{product.descriptionLong}</Typography>
            </Box>
          </Grid>

          <Grid item lg={4}>
            {product.oferta && (
              <Box
                display={product.oferta ? 'flex' : 'none'}
                justifyContent={'center'}
                fontStyle={'bold'}
                mx={10}
                mb={3}
                component='span'
                sx={{
                  backgroundColor: 'green',
                  color: 'white',
                  padding: '5px 50px',
                  fontSize: '16px',
                  borderRadius: '4px',
                }}
              >
                APROVECHA LA OFERTA
              </Box>
            )}
            <Typography
              variant='h6'
              sx={{
                color: 'primary.main',
                mb: 2,
                position: 'relative',
              }}
              ml={{xs: 0, sm: 3, md: 3, lg: 3}}
              textAlign='center'
              marginTop={{xs: 3, sm: 0, md: 0, lg: 0}}
            >
              Precio ${product.price}
            </Typography>

            <Counter
              stock={product.stock}
              idProduct={id}
              productData={product}
            />
            <Box mt={2} mx={3} display='flex' justifyContent='center'>
              {favorites.some((favorite) => favorite.id === product.id) ? (
                <Button size='small' onClick={handleRemoveFromFavorites}>
                  Quitar de mis Favoritos
                </Button>
              ) : (
                <Button size='small' onClick={handleAddToFavorites}>
                  Agregar a mis Favoritos
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>

        <Grid ml={2} mt={5}>
          <Typography variant='h6' gutterBottom>
            Te puede interesar
          </Typography>

          <Container maxWidth='lg'>
            <Grid container display='flex' justifyContent='left' mb={2}>
              {relatedProducts.length > 0 ? (
                relatedProducts.map((relatedProduct) => (
                  <Grid
                    item
                    key={relatedProduct.id}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                  >
                    <CardRelatedProduct
                      imgPrincipal={relatedProduct.imageMain}
                      price={relatedProduct.price}
                      extract={relatedProduct.descriptionShort}
                      variant={relatedProduct.variant}
                      stock={relatedProduct.stock}
                      id={relatedProduct.id}
                      oferta={relatedProduct.oferta}
                    />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography variant='body1'>
                    Por el momento, no tenemos otros productos relacionados que
                    mostrarte.
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Container>
        </Grid>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default ItemDetailContainer;
