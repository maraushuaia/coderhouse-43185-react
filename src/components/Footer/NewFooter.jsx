import React from 'react';
import {Link} from 'react-router-dom';
import {IconButton, Grid} from '@mui/material';
import {Instagram, YouTube, Facebook, WhatsApp} from '@mui/icons-material';

const NewFooter = () => {
  return (
    <footer
      style={{
        marginTop: '5em',
        height: '20em',
        background: 'linear-gradient(to right, #9c27b0, #b28035)',
        paddingLeft: '1.5em',
        paddingRight: '1.5em',
        paddingTop: '2em',
        color: '#fff',
        fontSize: '1em',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3} style={{textAlign: 'center'}}>
          <div>
            <Link to='/categorias'>Categorías</Link>
          </div>
          <div>
            <Link to='/ofertas'>Ofertas</Link>
          </div>
          <div>
            <Link to='/favoritos'>Favoritos</Link>
          </div>
          <div>
            <Link to='/ayuda'>Ayuda</Link>
          </div>
        </Grid>
        <Grid item xs={6} sm={3} style={{textAlign: 'center'}}>
          <div>
            Dirección: Av. Ejemplo 1234
            <br />
            Teléfono: 123-456789
            <br />
            Email: ejemplo@example.com
          </div>
        </Grid>
        <Grid item xs={6} sm={3} style={{textAlign: 'center'}}>
          <div>
            <Link to='/terminos'>Términos y Condiciones</Link>
            <br />
            <Link to='/privacidad'>Política de Privacidad</Link>
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div style={{textAlign: 'center'}}>
            <div>Seguinos en nuestras redes:</div>
            <IconButton color='inherit'>
              <YouTube />
            </IconButton>
            <IconButton color='inherit'>
              <Instagram />
            </IconButton>
            <IconButton color='inherit'>
              <Facebook />
            </IconButton>
            <IconButton color='inherit'>
              <WhatsApp />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default NewFooter;
