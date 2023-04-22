import {Box} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Typography from '@mui/material/Typography';

const Logo = () => {
  return (
    <Box sx={{display: {sm: 'flex'}, alignItems: 'center'}}>
      <LocalShippingIcon
        sx={{
          display: {xs: 'none', sm: 'block'},
          marginRight: '.5em',
          width: '40px',
          height: '40px',
        }}
      />
      <Typography
        variant='h6'
        noWrap
        component='div'
        sx={{display: {xs: 'flex', sm: 'block'}}}
        marginRight={'2.5em'}
      >
        CATERPILAR
      </Typography>
    </Box>
  );
};

export default Logo;
