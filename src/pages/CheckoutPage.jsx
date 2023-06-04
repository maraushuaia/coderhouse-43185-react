import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddressForm from '../components/Forms/AddressForm';
import PaymentForm from '../components/Forms/PaymentForm';
import ReviewForm from '../components/Forms/ReviewForm';
import ValidateForm from '../helpers/ValidateForm';

const steps = ['Envío', 'Pago', 'Confirmación'];

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const [valid, setValid] = useState(true); // Estado para controlar la validez del formulario actual

  useEffect(() => {
    // Recuperar los datos del envío almacenados en localStorage
    const savedShippingAddress =
      JSON.parse(localStorage.getItem('shippingAddress')) || {};
    setShippingAddress(savedShippingAddress);
  }, []);

  const handleNext = () => {
    const currentStep = steps[activeStep];
    const requiredFields = getRequiredFields(currentStep);

    if (ValidateForm(getFormData(currentStep), requiredFields)) {
      if (activeStep === 0) {
        localStorage.setItem(
          'shippingAddress',
          JSON.stringify(shippingAddress)
        );
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setValid(false);
    } else {
      toast.error('Completa todos los campos requeridos antes de continuar');
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setValid(true);
  };

  const handleAddressFormChange = (updatedAddress, isValid) => {
    setShippingAddress(updatedAddress);
    setValid(isValid);
  };

  const handlePaymentFormChange = (updatedPaymentData, isValid) => {
    setPaymentData(updatedPaymentData);
    setValid(isValid);
  };

  const getRequiredFields = (step) => {
    switch (step) {
      case 'Dirección de Envío':
        return [
          'firstName',
          'lastName',
          'address',
          'phone',
          'city',
          'zip',
          'country',
        ];
      case 'Detalles del Pago':
        return ['cardName', 'cardNumber', 'expDate', 'cvv'];
      default:
        return [];
    }
  };

  const getFormData = (step) => {
    switch (step) {
      case 'Dirección de Envío':
        return shippingAddress;
      case 'Detalles del Pago':
        return paymentData;
      default:
        return {};
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <AddressForm
            formData={shippingAddress}
            onFormDataChange={handleAddressFormChange}
            onValidChange={setValid}
          />
        );
      case 1:
        return (
          <PaymentForm
            formData={paymentData}
            onFormDataChange={handlePaymentFormChange}
            onValidChange={setValid}
          />
        );
      case 2:
        return (
          <ReviewForm
            shippingAddress={shippingAddress}
            paymentData={paymentData}
          />
        );
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <Grid
      container
      spacing={0}
      justifyContent='center'
      sx={{minHeight: '100vh'}}
    >
      <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
        <Paper
          sx={{
            marginTop: 3,
            marginBottom: 3,
            padding: 2,
            '@media(min-width:600px)': {
              marginTop: 6,
              marginBottom: 6,
              padding: 3,
              width: 600,
              marginLeft: 'auto',
              marginRight: 'auto',
            },
          }}
        >
          <Typography
            component='h1'
            variant='h4'
            align='center'
            marginBottom={2}
          >
            Checkout
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant='h5' gutterBottom pt={2}>
                  Gracias por su compra.
                </Typography>
                <Typography variant='subtitle1'>
                  Su número de pedido es #2001539. Le hemos enviado por correo
                  electrónico confirmación del pedido, y le enviaremos una
                  actualización cuando su pedido sea enviado.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Grid
                  container
                  spacing={1}
                  justifyContent={activeStep !== 0 ? 'flex-end' : 'flex-start'}
                  mt={3}
                  mb={3}
                  ml={activeStep !== 0 ? 1 : 0}
                >
                  {activeStep !== 0 && (
                    <Grid item>
                      <Button onClick={handleBack}>Atrás</Button>
                    </Grid>
                  )}
                  <Grid item>
                    <Button
                      variant='contained'
                      color='secondary'
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1
                        ? 'Realizar Pedido'
                        : 'Siguiente'}
                    </Button>
                  </Grid>
                </Grid>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CheckoutPage;
