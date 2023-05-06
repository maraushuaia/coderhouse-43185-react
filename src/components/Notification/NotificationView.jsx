/***/
/* Este componente se invoca unicamente desde el Navbar*/
/***/
import React from 'react';
import {Badge, IconButton} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationView = ({color}) => {
  return (
    <div>
      <Badge badgeContent={1} color='info' sx={{mr: 2}}>
        <NotificationsIcon color={color} />
      </Badge>
    </div>
  );
};

export default NotificationView;
