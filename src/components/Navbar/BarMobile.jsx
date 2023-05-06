// import * as React from 'react';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import {styled} from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import NotificationView from '../Notification/NotificationView';
// import CartView from '../CartWidget/CartWidgetView';
// import UserView from '../User/UserView';

// const BarMobile = () => {
//   const [value, setValue] = React.useState(0);

//   const BottomAppBar = styled(AppBar)({
//     top: 'auto',
//     bottom: 0,
//   });

//   return (
//     <Box sx={{display: {xs: 'flex', sm: 'none', md: 'none', lg: 'none'}}}>
//       <BottomAppBar position='fixed'>
//         <BottomNavigation
//           showLabels={true}
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//           sx={{pt: 1}}
//         >
//           <BottomNavigationAction
//             label='Alertas'
//             icon={<NotificationView color='secondary' />}
//           />
//           <BottomNavigationAction
//             label='Carrito'
//             icon={<CartView color='secondary' />}
//           />
//           <BottomNavigationAction
//             label='Mi Cuenta'
//             icon={<UserView color='secondary' />}
//           />
//         </BottomNavigation>
//       </BottomAppBar>
//     </Box>
//   );
// };

// export default BarMobile;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import {styled} from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import NotificationView from '../Notification/NotificationView';
// import CartView from '../CartWidget/CartWidgetView';
// import UserView from '../User/UserView';

// const BarMobile = () => {
//   const [value, setValue] = React.useState(0);

//   const BottomAppBar = styled(AppBar)({
//     top: 'auto',
//     bottom: 0,
//   });

//   const navItems = [
//     {label: 'Alertas', icon: <NotificationView color='secondary' />},
//     {label: 'Carrito', icon: <CartView color='secondary' />},
//     {label: 'Mi Cuenta', icon: <UserView color='secondary' />},
//   ];

//   return (
//     <Box sx={{display: {xs: 'flex', sm: 'none', md: 'none', lg: 'none'}}}>
//       <BottomAppBar position='fixed'>
//         <BottomNavigation
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//           sx={{pt: 2, pb: 2}}
//         >
//           {navItems.map((item, index) => (
//             <BottomNavigationAction
//               key={index}
//               label={item.label}
//               icon={item.icon}
//             />
//           ))}
//         </BottomNavigation>
//       </BottomAppBar>
//     </Box>
//   );
// };

// export default BarMobile;

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationView from '../Notification/NotificationView';
import CartWidgetView from '../CartWidget/CartWidgetView';

const BottomAppBar = styled(AppBar)({
  top: 'auto',
  bottom: 0,
});

const BarMobile = () => {
  const [value, setValue] = React.useState(0);

  const handleBottomNavChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{display: {xs: 'flex', sm: 'none', md: 'none', lg: 'none'}}}>
      <BottomAppBar position='fixed'>
        <BottomNavigation value={value} onChange={handleBottomNavChange}>
          <BottomNavigationAction
            icon={<NotificationView color='secondary' />}
          />
          <BottomNavigationAction icon={<CartWidgetView color='secondary' />} />
          <BottomNavigationAction icon={<MoreHorizIcon />} />
        </BottomNavigation>
      </BottomAppBar>
    </Box>
  );
};

export default BarMobile;
