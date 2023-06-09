import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Typography} from '@mui/material';

const ErrorInfo = () => {
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
        src='https://res.cloudinary.com/dtvrg3by2/image/upload/v1684595213/react43185/503_Error_Service_Unavailable-cuate_nnvdjv.png'
        alt='Error'
        width={340}
        height={340}
      />

      <Typography variant='h6' component='h6' align='center'>
        Falló la conexión al servidor
      </Typography>
      <Button variant='contained' color='secondary' onClick={handleGoHome}>
        Inicio
      </Button>
    </Box>
  );
};

export default ErrorInfo;
