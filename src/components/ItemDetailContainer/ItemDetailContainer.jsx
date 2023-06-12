import React, {useContext, useEffect, useState} from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import {useParams} from 'react-router-dom';
import {ProductContext} from '../../contexts/ContextProducts';
import {ContextFavorites} from '../../contexts/ContextFavorites';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Carrusel from '../Carrusel/Carrusel';
import CardImages from '../Card/CardImages';
import Counter from '../Counter/Counter';
import ErrorNoFound from '../Error/ProductNoFound';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const {getProductById, products} = useContext(ProductContext);
  const {favorites, addFavorite, removeFavorite} = useContext(ContextFavorites);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(id);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
          setIsFavorite(
            favorites.some((favorite) => favorite.id === fetchedProduct.id)
          );
        } else {
          setProduct(null);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, getProductById, favorites]);

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
    return <Loader />;
  }

  if (!product) {
    return <ErrorNoFound />;
  }

  // Filtrar productos relacionados por categoría, excluyendo el producto actual
  const relatedProducts = products.filter(
    (relatedProduct) =>
      relatedProduct.category === product.category &&
      relatedProduct.id !== product.id
  );

  return (
    <Container maxWidth='xl' sx={{mt: 4, minHeight: '80vh'}}>
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
        <Box display={{xs: 'flex', lg: 'none'}}>
          {product.oferta && (
            <Box
              display={product.oferta ? 'flex' : 'none'}
              justifyContent='center'
              fontStyle='bold'
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
        </Box>
        <Grid
          container
          sx={{
            display: {xs: 'flex', md: 'flex'},
            flexDirection: {xs: 'column', md: 'row'},
          }}
        >
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <CardImages images={product.imageAditional} />
            <Box mx={1.5}>
              <Typography variant='span'>{product.descriptionLong}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            {product.oferta && (
              <Box
                display={product.oferta ? 'flex' : 'none'}
                justifyContent='center'
                fontStyle='bold'
                mx={10}
                mb={3}
                component='span'
                sx={{
                  display: {xs: 'none', lg: 'flex'},
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
              {isFavorite ? (
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
            {relatedProducts.length > 0 ? (
              <Carrusel listado={relatedProducts} />
            ) : (
              <Grid item xs={12}>
                <Typography variant='body1'>
                  Por el momento, no tenemos otros productos relacionados que
                  mostrarte.
                </Typography>
              </Grid>
            )}
          </Container>
        </Grid>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default ItemDetailContainer;
