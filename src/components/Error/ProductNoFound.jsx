import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Typography} from '@mui/material';

const ProductNoFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='80vh'
    >
      <img
        src='https://res.cloudinary.com/dtvrg3by2/image/upload/v1686514200/react43185/Empty-pana_zgdabr.png'
        alt='Error'
        width={340}
        height={340}
      />

      <Typography variant='h6' component='h6' align='center'>
        El producto buscado no existe.
      </Typography>
      <Button variant='contained' color='secondary' onClick={handleGoHome}>
        Ir al Inicio
      </Button>
    </Box>
  );
};

export default ProductNoFound;
