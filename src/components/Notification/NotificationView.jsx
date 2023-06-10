import React from 'react';
import {Badge} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationView = ({color}) => {
  return (
    <div>
      <Badge badgeContent={1} color='info'>
        <NotificationsIcon color={color} />
      </Badge>
    </div>
  );
};

export default NotificationView;
