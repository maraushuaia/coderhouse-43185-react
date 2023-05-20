import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import StoreIcon from '@mui/icons-material/Store';

const Logo = () => {
  return (
    <Link to={'/'} style={{color: 'white', textDecoration: 'none'}}>
      <Box sx={{display: {sm: 'flex'}, alignItems: 'center'}}>
        <StoreIcon
          sx={{
            display: {xs: 'none', sm: 'block'},
            marginRight: '.5em',
            width: '40px',
            height: '40px',
            color: '#fff',
          }}
        />

        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{
            display: {xs: 'flex', sm: 'block'},
            textDecoration: 'none',
          }}
          marginRight={'2.5em'}
          color={'#fff'}
        >
          EXPLORA
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
