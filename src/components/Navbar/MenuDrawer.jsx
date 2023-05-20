import React, {useState} from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom';

const MenuDrawer = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setState({...state, left: false});
  };

  const list = (anchor) => (
    <Box
      sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate('/categorias')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Categorias' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate('/ofertas')}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='Ofertas' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate('/favoritos')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Favoritos' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate('/ayuda')}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='Ayuda' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{display: {xs: 'flex', sm: 'flex', md: 'flex', lg: 'none'}}}>
      <MenuIcon
        size='large'
        edge='start'
        color='inherit'
        aria-label='open drawer'
        sx={{mr: 1}}
        onClick={toggleDrawer('left', true)}
      />
      <React.Fragment key={'left'}>
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </Box>
  );
};

export default MenuDrawer;
