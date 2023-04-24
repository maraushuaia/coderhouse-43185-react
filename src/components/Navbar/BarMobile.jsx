import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {AccountCircle} from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import NotificationView from '../Notification/NotificationView';
import CartView from '../CartWidget/CartWidgetView';
import UserView from '../User/UserView';

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
            icon={<NotificationView color='secondary'/>}
          />
          <BottomNavigationAction label='Carrito' icon={<CartView color='secondary'/>} />
          <BottomNavigationAction label='Mi Cuenta' icon={<UserView color='secondary'/>} />
          </BottomNavigation>
      </BottomAppBar>
    </Box>
  );
};

export default BarMobile;
