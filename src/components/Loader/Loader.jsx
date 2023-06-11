import {Box} from '@mui/material';
import {CirclesWithBar} from 'react-loader-spinner';

const Loader = () => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <CirclesWithBar
        height={100}
        width={100}
        color='#bb86fc'
        ariaLabel='circles-with-bar-loading'
      />
    </Box>
  );
};

export default Loader;
