import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Typography} from '@mui/material';

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <Typography variant='h5' component='h2' align='center'>
        Ha fallado la conexión al servidor
      </Typography>
      <img
        src='https://res.cloudinary.com/dtvrg3by2/image/upload/v1684595213/react43185/503_Error_Service_Unavailable-cuate_nnvdjv.png'
        alt='Error'
        width={200}
        height={200}
      />
      <Button variant='contained' color='primary' onClick={handleGoHome}>
        Inicio
      </Button>
    </div>
  );
};

export default Error;
