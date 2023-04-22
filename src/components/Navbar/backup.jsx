import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import OptionMenu from './OptionMenu';
import SearchView from '../Search/SearchView';
import NotificationView from '../Notification/NotificationView';
import CartView from '../CartWidget/CartWidgetView';
import Logo from './Logo';

const NavbarPrimaryApp = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      marginThreshold={45}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Editar</MenuItem>
      <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
    </Menu>
  );

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

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static' color='secondary'>
        <Toolbar>
          {/* Aca se renderiza MENU DRAWER*/}
          <Box sx={{display: {xs: 'flex', sm: 'flex', md: 'flex', lg: 'none'}}}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{mr: 1}}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Aca se renderiza EL LOGO*/}
          <Logo />
          {/* Aca se renderizan las distintas opciones del menu */}
          <OptionMenu />

          <Box sx={{flexGrow: 1}} />
          <Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center'}}>
            {/* Aca se renderiza el CAMPO de busqueda*/}
            <SearchView></SearchView>

            {/* Aca se renderiza el ICONO de Notificaciones*/}
            <NotificationView></NotificationView>

            {/* Aca se renderiza el ICONO del CARTWidget*/}
            <CartView></CartView>

            {/* Aca se renderiza el ICONO del USER*/}
            <IconButton
              size='large'
              edge='end'
              aria-label='account user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            {/* <UserView></UserView> */}
          </Box>

          <Box sx={{display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default NavbarPrimaryApp;
