import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {AccountCircle} from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

const BarMobile = () => {
  const [value, setValue] = React.useState(0);

  const BottomAppBar = styled(AppBar)({
    top: 'auto',
    bottom: 0,
  });

  return (
    <Box sx={{display: {xs: 'flex', sm: 'none', md: 'none', lg: 'none'}}}>
      <BottomAppBar position='fixed'>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label='Alertas'
            icon={<NotificationsIcon />}
          />
          <BottomNavigationAction label='Carrito' icon={<ShoppingCartIcon />} />
          <BottomNavigationAction label='Mi Cuenta' icon={<AccountCircle />} />
        </BottomNavigation>
      </BottomAppBar>
    </Box>
  );
};

export default BarMobile;
