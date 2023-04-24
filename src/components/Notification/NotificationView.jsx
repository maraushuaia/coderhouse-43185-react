/***/
/* Este componente se invoca unicamente desde el Navbar*/
/***/

import React from 'react';
import {Badge, IconButton} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationView = ({color}) => {
  return (
    <IconButton
      size='large'
      aria-label='notification'
      color={color}
      sx={{pt: 1, pb: 0}}
    >
      <Badge badgeContent={1} color='info'>
        <NotificationsIcon sx={{pb: 0}} />
      </Badge>
    </IconButton>
  );
};

export default NotificationView;
