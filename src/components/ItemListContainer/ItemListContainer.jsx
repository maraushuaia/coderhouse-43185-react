// //Con este componenten se muestra la lista de productos, se importa el archivo products.json y se muestra en pantalla
// //Se importa el componente ItemDetailView para mostrar el detalle del producto al hacer click en el mismo

import React, {useState, useEffect} from 'react';
import {Container, Typography, Box, CircularProgress} from '@mui/material';
import {Link, useParams} from 'react-router-dom';
import CardProducts from '../Card/CardProducts';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL_LOCAL)
      // fetch(process.env.REACT_APP_DIRECTUS_API_URL)
      .then((response) => response.json())
      // .then((data) => setProducts(data.data))
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (id) => {
    console.log(`Clicked product with id ${id}`);
    const selectedProduct = products.find((product) => product.id === id);
    if (selectedProduct && selectedProduct.status === 'published') {
      setProductSelected(selectedProduct);
      console.log('Producto Seleccionado:=> ', selectedProduct);
    }
  };

  // const handleClick = (id) => {
  //   const selectedProduct = products.find((product) => product.id === id);
  //   if (selectedProduct && selectedProduct.status === 'published') {
  //     setProductSelected(selectedProduct);

  //     productSelected && (
  //       <Link to={`/item/:${id}`} style={{textDecoration: 'none'}}>
  //         <ItemDetailContainer productSelected={productSelected} />
  //       </Link>
  //     );
  //     console.log('Producto Seleccionado:=> ', selectedProduct);
  //   }
  // };

  return (
    <Container maxWidth='xl' sx={{mt: 4}}>
      <Typography variant='h4' gutterBottom>
        Lista de productos
      </Typography>

      {products.length === 0 ? (
        <Box sx={{display: 'grid', justifyContent: 'center'}}>
          <CircularProgress />
          loading...
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            display: 'grid',
          }}
          gridTemplateColumns={{
            xs: 'repeat(auto-fit, minmax(140px, 1fr))',
            sm: 'repeat(auto-fit, minmax(150px, 1fr))',
            md: 'repeat(auto-fit, minmax(180px, 1fr))',
            lg: 'repeat(auto-fit, minmax(190px, 1fr))',
          }}
          mb={2}
          gap={{xs: 1.5, sm: 2, md: 3, lg: 4}}
        >
          {products.map(
            (product) => (
              // product.status === 'published' ? (
              <Link
                key={product.id}
                // onClick={() => handleClick(product.id)}
                to={`/itemDetail/${product.id}`}
                style={{textDecoration: 'none'}}
              >
                <CardProducts product={product} />
              </Link>
            )

            // ) : null
          )}
        </Box>
      )}
    </Container>
  );
};

export default ItemListContainer;
