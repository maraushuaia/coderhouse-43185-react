import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import OptionMenu from './OptionMenu';
import SearchView from '../Search/SearchView';
import NotificationView from '../Notification/NotificationView';
import CartView from '../CartWidget/CartWidgetView';
import Logo from './Logo';
import UserView from '../User/UserView';
import MenuDrawer from './MenuDrawer';

const NavbarPrimaryApp = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NotificationView></NotificationView>
        <p>Notificaciones</p>
      </MenuItem>

      <MenuItem>
        <CartView />
        <p>Carrito</p>
      </MenuItem>

      <MenuItem>
        <UserView />
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );

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
            {/* Aca se renderiza el la Busqueda, Notificaciones, CartWidget, User*/}
            <Box
              sx={{
                display: {xs: 'none', sm: 'none', md: 'flex'},
              }}
            >
              <SearchView />
            </Box>
            <NotificationView />
            <CartView />
            <UserView />
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};

export default NavbarPrimaryApp;
