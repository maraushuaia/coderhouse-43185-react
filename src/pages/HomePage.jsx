// import React, {useState, useEffect} from 'react';
// import {Container, Typography} from '@mui/material';
// import Carrusel from '../components/Carrusel/Carrusel';
// import {CirclesWithBar} from 'react-loader-spinner';
// import useFilterProducts from '../hooks/useFilterProducts';

// const HomePage = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [ofertasList, setOfertasList] = useState([]);
//   // const [lenceria, setLenceria] = useState([]);

//   const filterOfertasList = useFilterProducts('oferta', true);
//   // const filterLenceria = useFilterProducts('categoria', 'Lencería');
//   // console.log('Contenido de Filtro Lenceria: ', filterLenceria);

//   useEffect(() => {
//     setIsLoading(false);
//   }, []);

//   useEffect(() => {
//     setOfertasList(() => filterOfertasList);
//   }, [filterOfertasList]);

//   // useEffect(() => {
//   //   setLenceria(() => filterLenceria);
//   // }, [filterLenceria]);

//   return (
//     <Container maxWidth='xl' sx={{mt: 4, minHeight: '80vh'}}>
//       {!isLoading ? (
//         <>
//           <section>
//             <Typography variant='h5' component='h5'>
//               Nuestras Ofertas
//             </Typography>
//             <Carrusel listado={ofertasList} />
//           </section>

//           {/* <section>
//             <Typography variant='h5' component='h5'>
//               Artículos de Lencería
//             </Typography>
//             <Carrusel listado={lenceria} />
//           </section> */}

//           {/* Resto del código */}
//         </>
//       ) : (
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             minHeight: '400px',
//           }}
//         >
//           <CirclesWithBar
//             height={100}
//             width={100}
//             color='#bb86fc'
//             ariaLabel='circles-with-bar-loading'
//           />
//         </div>
//       )}
//     </Container>
//   );
// };

// export default HomePage;
import React, {useState, useEffect, useContext} from 'react';
import {Container, Typography} from '@mui/material';
import Carrusel from '../components/Carrusel/Carrusel';
import {CirclesWithBar} from 'react-loader-spinner';
import {ProductContext} from '../contexts/ContextProducts';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {products} = useContext(ProductContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth='xl' sx={{mt: 4, minHeight: '80vh'}}>
      {!isLoading && products ? (
        <>
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
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px',
          }}
        >
          <CirclesWithBar
            height={100}
            width={100}
            color='#bb86fc'
            ariaLabel='circles-with-bar-loading'
          />
        </div>
      )}
    </Container>
  );
};

export default HomePage;
