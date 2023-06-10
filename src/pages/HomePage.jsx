import {Container, Typography} from '@mui/material';
import Carrusel from '../components/Carrusel/Carrusel';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const HomePage = () => {
  return (
    <Container maxWidth='xl' sx={{mt: 4, minHeight: '80vh'}}>
      <section>
        <Typography variant='h5' component='h5'>
          Ofertas
        </Typography>
        <Carrusel />
      </section>

      <section>
        <Typography variant='h5' component='h5'>
          Lencería
        </Typography>
        <Carrusel />
      </section>

      <section>
        <Typography variant='h5' component='h5'>
          Favoritos
        </Typography>
        <Carrusel />
      </section>

      <ItemListContainer />
    </Container>
  );
};

export default HomePage;

// import React, {useContext} from 'react';
// import {Box, Container, Grid, IconButton, Typography} from '@mui/material';
// import {ChevronLeft, ChevronRight} from '@mui/icons-material';
// import {ProductContext} from '../contexts/ContextProducts';
// import {ContextFavorites} from '../contexts/ContextFavorites';
// import CardProducts from '../components/Card/CardProducts';
// import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

// const Carrusel = ({products}) => {
//   // Resto del código del componente Carrusel
// };

// const HomePage = () => {
//   const {products} = useContext(ProductContext);
//   const {favorites} = useContext(ContextFavorites);

//   return (
//     <Container maxWidth='xl' sx={{mt: 4, minHeight: '80vh'}}>
//       <section>
//         <Typography variant='h2' component='h2'>
//           Ofertas
//         </Typography>
//         <Carrusel products={products.filter((product) => product.isOffer)} />
//       </section>

//       <section>
//         <Typography variant='h2' component='h2'>
//           Lencería
//         </Typography>
//         <Carrusel
//           products={products.filter(
//             (product) => product.category === 'Lencería'
//           )}
//         />
//       </section>

//       <section>
//         <Typography variant='h2' component='h2'>
//           Favoritos
//         </Typography>
//         <Carrusel
//           products={products.filter((product) =>
//             favorites.includes(product.id)
//           )}
//         />
//       </section>

//       {/* Agrega la importación del componente ItemListContainer y utiliza el componente aquí */}
//       <ItemListContainer />
//     </Container>
//   );
// };

// export default HomePage;
