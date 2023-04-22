import * as React from 'react';
import {Box, IconButton, Menu, MenuItem} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';

const UserView = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const menuId = 'primary-search-account-menu';

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

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

  return (
    <Box>
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
      {renderMenu}
    </Box>
  );
};

export default UserView;
