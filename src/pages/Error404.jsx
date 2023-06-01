import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Typography} from '@mui/material';

const Error404 = () => {
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
        src='https://res.cloudinary.com/dtvrg3by2/image/upload/v1685589844/react43185/404_Error_with_a_cute_animal-amico_fd58yv.png'
        alt='Error'
        width={340}
        height={340}
      />

      <Typography variant='h6' component='h6' align='center'>
        Página no encontrada
      </Typography>
      <Button variant='contained' color='secondary' onClick={handleGoHome}>
        Ir a Inicio
      </Button>
    </Box>
  );
};

export default Error404;
