import React from 'react';
import {Link} from 'react-router-dom';
import {IconButton, Grid, Typography} from '@mui/material';
import {Instagram, YouTube, Facebook, WhatsApp} from '@mui/icons-material';

const Footer = () => {
  const accessLinks = [
    {to: '/categorias', label: 'Categorías'},
    {to: '/ofertas', label: 'Ofertas'},
    {to: '/favoritos', label: 'Favoritos'},
    {to: '/ayuda', label: 'Ayuda'},
  ];

  const privacyLinks = [
    {to: '/terminos', label: 'Términos y Condiciones'},
    {to: '/privacidad', label: 'Política de Privacidad'},
  ];

  return (
    <footer
      style={{
        marginTop: '7em',
        paddingTop: '3em',
        paddingBottom: '7em',
        background: 'linear-gradient(to right, #9c27b0, #b28035)',
        paddingLeft: '1em',
        paddingRight: '1em',
        color: '#fff',
        fontSize: '1em',
      }}
    >
      <Grid
        container
        flexDirection={{xs: 'column', md: 'row'}}
        alignContent={'center'}
        gap={{xs: 3, md: 0}}
      >
        <Grid item xs={6} sm={3} style={{textAlign: 'center'}}>
          <Typography variant='h6'>Accesos</Typography>
          {accessLinks.map((link, index) => (
            <div key={index}>
              <Link
                to={link.to}
                style={{textDecoration: 'none', color: 'white'}}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </Grid>
        <Grid item xs={6} sm={3} style={{textAlign: 'center'}}>
          <Typography variant='h6'>Dirección</Typography>
          <div>
            Dirección: Av. Ejemplo 1234
            <br />
            Teléfono: 123-456789
            <br />
            Email: ejemplo@example.com
          </div>
        </Grid>
        <Grid item xs={6} sm={3} style={{textAlign: 'center'}}>
          <Typography variant='h6'>Privacidad</Typography>
          {privacyLinks.map((link, index) => (
            <div key={index}>
              <Link
                to={link.to}
                style={{textDecoration: 'none', color: 'white'}}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </Grid>
        <Grid item xs={6} sm={3}>
          <div style={{textAlign: 'center'}}>
            <Typography variant='h6'>Contactos</Typography>
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

export default Footer;
