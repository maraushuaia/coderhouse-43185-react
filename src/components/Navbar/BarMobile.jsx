import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationView from '../Notification/NotificationView';
import CartWidgetView from '../CartWidget/CartWidgetView';
import {useNavigate} from 'react-router-dom';

const BottomAppBar = styled(AppBar)({
  top: 'auto',
  bottom: 0,
});

const BarMobile = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleBottomNavChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{display: {xs: 'flex', sm: 'none', md: 'none', lg: 'none'}}}>
      <BottomAppBar position='fixed'>
        <BottomNavigation value={value} onChange={handleBottomNavChange}>
          <BottomNavigationAction
            icon={<NotificationView color='secondary' />}
            onClick={() => handleNavigate('/notificaciones')}
          />
          <BottomNavigationAction
            icon={<CartWidgetView color='secondary' />}
            onClick={() => handleNavigate('/cart')}
          />
          <BottomNavigationAction
            icon={<MoreHorizIcon />}
            onClick={() => handleNavigate('/more')}
          />
        </BottomNavigation>
      </BottomAppBar>
    </Box>
  );
};

export default BarMobile;
