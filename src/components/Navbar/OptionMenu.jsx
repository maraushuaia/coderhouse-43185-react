/***/
/* Este componente se invoca unicamente desde el Navbar*/
/***/

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import {Link} from 'react-router-dom';

const pages = ['Categorias', 'Ofertas', 'Historial', 'Ayuda'];

const OptionMenu = () => {
  return (
    <Box sx={{display: {xs: 'none', sm: 'none', md: 'none', lg: 'block'}}}>
      {pages.map((page) => (
        <Button
          key={page}
          variant='text'
          color='inherit'
          style={{
            fontSize: '16px',
          }}
        >
          {/* <Link
              style={{textDecoration: 'none', color: 'inherit'}}
              //   to={'/estado/' + page}
            >
              {page}
            </Link> */}
          {page}
        </Button>
      ))}
    </Box>
  );
};
export default OptionMenu;
