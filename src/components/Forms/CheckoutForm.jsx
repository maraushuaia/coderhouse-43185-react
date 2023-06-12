import {Box, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';

const CheckoutForm = ({idOrder}) => {
  return (
    <Box
      minHeight={'80vh'}
      display='flex'
      flexDirection='column'
      justifyContent='flex-start'
      alignItems='center'
      textAlign='center'
      padding={2}
    >
      <Typography variant='h5' gutterBottom pt={2}>
        ¡Gracias por su compra!
      </Typography>
      <Typography variant='subtitle1' paddingBottom={1}>
        Su número de pedido es:
      </Typography>
      <Typography variant='subtitle1' paddingBottom={2}>
        <strong>{idOrder}</strong>
      </Typography>
      <Typography variant='subtitle1' paddingBottom={2}>
        Le hemos enviado por correo electrónico la confirmación del pedido, y le
        enviaremos una actualización cuando su pedido sea enviado.
      </Typography>
      <Button variant='contained' color='secondary' component={Link} to='/'>
        Seguir comprando
      </Button>
    </Box>
  );
};

export default CheckoutForm;
