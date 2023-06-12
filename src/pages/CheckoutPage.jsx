import React, {useState, useEffect, useContext} from 'react';
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
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../FirebaseConfig';
import {CartContext} from '../contexts/ContextCartWidget';
import CheckoutForm from '../components/Forms/CheckoutForm';
import ErrorInfo from '../components/Error/ErrorInfo';

const steps = ['Envío', 'Pago', 'Confirmación'];

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const [valid, setValid] = useState(true); // Estado para controlar la validez del formulario actual
  const [numberOrder, setNumberOrder] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {getTotalPrice, clearCart} = useContext(CartContext);

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
      console.log('Presioné el botón de siguiente');
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
      case 'Envío':
        return [
          'firstName',
          'lastName',
          'address',
          'phone',
          'city',
          'zip',
          'country',
        ];
      case 'Pago':
        return ['cardName', 'cardNumber', 'expDate', 'cvv'];
      default:
        return [];
    }
  };

  const getFormData = (step) => {
    switch (step) {
      case 'Envío':
        return shippingAddress;
      case 'Pago':
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

  const cart = JSON.parse(localStorage.getItem('cartProducts')) || [];

  const totalCompra = getTotalPrice();

  const order = {
    items: cart,
    comprador: shippingAddress,
    totalCompra,
    date: new Date(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (cart.length > 0) {
      const orderCollection = collection(db, 'orders');

      addDoc(orderCollection, order)
        .then((docRef) => {
          setNumberOrder(docRef.id);
          clearCart();
        })
        .catch((error) => {
          <ErrorInfo />;
          console.error('Error adding document: ', error);
        });
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Grid
      container
      spacing={0}
      justifyContent='center'
      sx={{minHeight: '80vh'}}
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
                <CheckoutForm idOrder={numberOrder} />
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

                  <Grid item mr={2}>
                    {activeStep === steps.length - 1 ? (
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={handleSubmit}
                      >
                        Realizar Pedido
                      </Button>
                    ) : (
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={handleNext}
                      >
                        Siguiente
                      </Button>
                    )}
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
