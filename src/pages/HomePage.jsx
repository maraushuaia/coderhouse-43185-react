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
