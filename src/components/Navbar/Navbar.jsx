import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import OptionMenu from './OptionMenu';
import NotificationView from '../Notification/NotificationView';
import CartView from '../CartWidget/CartWidgetView';
import Logo from './Logo';
import UserView from '../User/UserView';
import MenuDrawer from './MenuDrawer';

const NavbarRender = () => {
  return (
    <Box sx={{flexGrow: 1, position: 'sticky', zIndex: 1, marginBottom: 10}}>
      <AppBar color='secondary'>
        <Toolbar>
          {/* Aca se renderiza MENU DRAWER*/}
          <MenuDrawer />

          {/* Aca se renderiza el LOGO y las opciones del MENU*/}
          <Logo />
          <OptionMenu />

          <Box sx={{flexGrow: 1}} />
          <Box
            sx={{
              display: {xs: 'none', sm: 'flex', md: 'flex'},
              alignItems: 'center',
            }}
          >
            {/* Aca se renderiza las Notificaciones, CartWidget, User*/}

            <NotificationView color='inherit' />
            <CartView color='inherit' />
            <UserView color='inherit' />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarRender;
