// import {Container, Typography} from '@mui/material';
// import Carrusel from '../components/Carrusel/Carrusel';
// import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

// const HomePage = () => {
//   return (
//     <Container maxWidth='xl' sx={{mt: 4, minHeight: '80vh'}}>
//       <section>
//         <Typography variant='h5' component='h5'>
//           Ofertas
//         </Typography>
//         <Carrusel category={'Lenceria'} />
//       </section>

//       <section>
//         <Typography variant='h5' component='h5'>
//           Lencería
//         </Typography>
//         <Carrusel />
//       </section>

//       <section>
//         <Typography variant='h5' component='h5'>
//           Favoritos
//         </Typography>
//         <Carrusel />
//       </section>

//       {/* <ItemListContainer /> */}
//     </Container>
//   );
// };

// export default HomePage;

import {Container, Typography} from '@mui/material';
import Carrusel from '../components/Carrusel/Carrusel';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const HomePage = () => {
  return (
    <Container maxWidth='xl' sx={{mt: 4, minHeight: '80vh'}}>
      <section>
        <Typography variant='h5' component='h5'>
          Nuestras Ofertas
        </Typography>
        <Carrusel renderType='oferta' oferta={true} />
      </section>

      <section>
        <Typography variant='h5' component='h5'>
          Artículos de Lencería
        </Typography>
        <Carrusel renderType='category' category='Lencería' />
      </section>

      <section>
        <Typography variant='h5' component='h5'>
          Artículos de Informática
        </Typography>
        <Carrusel renderType='category' category='Informática' />
      </section>

      {/* <ItemListContainer /> */}
    </Container>
  );
};

export default HomePage;
