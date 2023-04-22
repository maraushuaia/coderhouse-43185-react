import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const BarMobile = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 1,
        display: {xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none'},
      }}
    >
      <AppBar>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' component='div'>
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BarMobile;
