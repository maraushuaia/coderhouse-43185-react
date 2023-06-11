import React, {useContext} from 'react';
import {Container, Typography} from '@mui/material';
import Carrusel from '../components/Carrusel/Carrusel';
import {CirclesWithBar} from 'react-loader-spinner';
import {ProductContext} from '../contexts/ContextProducts';
import useFilterProducts from '../hooks/useFilterProducts';

const HomePage = () => {
  const {products} = useContext(ProductContext);

  const filtroOfertas = useFilterProducts({
    property: 'oferta',
    value: true,
  });

  const filtroLenceria = useFilterProducts({
    property: 'category',
    value: 'Lencería',
  });

  const filtroInformatica = useFilterProducts({
    property: 'category',
    value: 'Informática',
  });

  return (
    <Container maxWidth='xl' sx={{mt: 4, minHeight: '80vh'}}>
      {products.length === 0 ? (
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
      ) : (
        <>
          <section>
            <Typography variant='h5' component='h5'>
              Nuestras Ofertas
            </Typography>
            <Carrusel listado={filtroOfertas} />
          </section>

          <section>
            <Typography variant='h5' component='h5'>
              Artículos de Lencería
            </Typography>
            <Carrusel listado={filtroLenceria} />
          </section>
          <section>
            <Typography variant='h5' component='h5'>
              Artículos de Informática
            </Typography>
            <Carrusel listado={filtroInformatica} />
          </section>
        </>
      )}
    </Container>
  );
};

export default HomePage;
