// Componente AlertModal
import {Box, Button, Typography, Modal} from '@mui/material';

const AlertModal = ({open, onClose}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant='h6' align='center' gutterBottom>
          Por favor, complete todos los campos obligatorios.
        </Typography>
        <Box display='flex' justifyContent='center' marginTop={2}>
          <Button variant='contained' onClick={onClose}>
            Cerrar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AlertModal;
