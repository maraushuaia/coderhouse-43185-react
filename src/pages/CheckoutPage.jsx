// import React, { useState, useContext } from "react";
// import Paper from "@mui/material/Paper";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Grid } from "@mui/material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ValidateForm from "../helpers/ValidateForm";
// import { CartContext } from "../contexts/ContextCartWidget";

// import AddressForm from "../components/Forms/AddressForm";
// import PaymentForm from "../components/Forms/PaymentForm";
// import ReviewForm from "../components/Forms/ReviewForm";

// const steps = ["Dirección de Envío", "Detalles del Pago", "Confirmación"];

// const CheckoutPage = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [formData, setFormData] = useState({});
//   const [valid, setValid] = useState(true); // Estado para controlar la validez del formulario actual

//   const cartContext = useContext(CartContext);

//   const getStepContent = (step, formData, setFormData) => {
//     switch (step) {
//       case 0:
//         return (
//           <AddressForm
//             formData={formData}
//             setFormData={setFormData}
//             onValidChange={setValid}
//           />
//         );
//       case 1:
//         return (
//           <PaymentForm
//             formData={formData}
//             setFormData={setFormData}
//             onValidChange={setValid}
//           />
//         );
//       case 2:
//         return (
//           <ReviewForm
//             formData={formData}
//             cartItems={cartContext.cartProducts}
//           />
//         );
//       default:
//         throw new Error("Unknown step");
//     }
//   };

//   const handleNext = () => {
//     const currentStep = steps[activeStep];
//     const requiredFields = getRequiredFields(currentStep);

//     if (ValidateForm(formData, requiredFields)) {
//       setActiveStep((prevActiveStep) => prevActiveStep + 1);
//       setValid(false);
//     } else {
//       toast.error("Completa todos los campos requeridos antes de continuar");
//     }
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     setValid(true);
//   };

//   const handleFormDataChange = (updatedFormData, isValid) => {
//     setFormData(updatedFormData);
//     setValid(isValid);
//   };

//   const getRequiredFields = (step) => {
//     switch (step) {
//       case "Dirección de Envío":
//         return [
//           "firstName",
//           "lastName",
//           "address",
//           "phone",
//           "city",
//           "zip",
//           "country",
//         ];
//       case "Detalles del Pago":
//         return ["cardName", "cardNumber", "expDate", "cvv"];
//       default:
//         return [];
//     }
//   };

//   return (
//     <Grid
//       container
//       spacing={0}
//       justifyContent="center"
//       sx={{ minHeight: "100vh" }}
//     >
//       <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
//         <Paper
//           sx={{
//             marginTop: 3,
//             marginBottom: 3,
//             padding: 2,
//             "@media(min-width:600px)": {
//               marginTop: 6,
//               marginBottom: 6,
//               padding: 3,
//               width: 600,
//               marginLeft: "auto",
//               marginRight: "auto",
//             },
//           }}
//         >
//           <Typography
//             component="h1"
//             variant="h4"
//             align="center"
//             marginBottom={2}
//           >
//             Checkout
//           </Typography>
//           <Stepper activeStep={activeStep}>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           <React.Fragment>
//             {activeStep === steps.length ? (
//               <React.Fragment>
//                 <Typography variant="h5" gutterBottom>
//                   Thank you for your order.
//                 </Typography>
//                 <Typography variant="subtitle1">
//                   Your order number is #2001539. We have emailed your order
//                   confirmation, and will send you an update when your order has
//                   shipped.
//                 </Typography>
//               </React.Fragment>
//             ) : (
//               <React.Fragment>
//                 {getStepContent(activeStep, formData, handleFormDataChange)}
//                 <Grid
//                   container
//                   spacing={1}
//                   justifyContent={activeStep !== 0 ? "flex-end" : "flex-start"}
//                   mt={3}
//                   mb={3}
//                   ml={activeStep !== 0 ? 1 : 0}
//                 >
//                   {activeStep !== 0 && (
//                     <Grid item>
//                       <Button onClick={handleBack}>Atrás</Button>
//                     </Grid>
//                   )}
//                   <Grid item>
//                     <Button
//                       variant="contained"
//                       color="secondary"
//                       onClick={handleNext}
//                       disabled={false} // Habilita siempre el botón
//                     >
//                       {activeStep === steps.length - 1
//                         ? "Realizar Pedido"
//                         : "Siguiente"}
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </React.Fragment>
//             )}
//           </React.Fragment>
//         </Paper>
//       </Grid>
//       <ToastContainer />
//     </Grid>
//   );
// };

// export default CheckoutPage;

import React, { useState, useEffect, useContext } from "react";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ValidateForm from "../helpers/ValidateForm";
import { CartContext } from "../contexts/ContextCartWidget";

import AddressForm from "../components/Forms/AddressForm";
import PaymentForm from "../components/Forms/PaymentForm";
import ReviewForm from "../components/Forms/ReviewForm";

const steps = ["Dirección de Envío", "Detalles del Pago", "Confirmación"];

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [valid, setValid] = useState(true); // Estado para controlar la validez del formulario actual

  const cartContext = useContext(CartContext);

  useEffect(() => {
    // Recuperar los datos del formulario almacenados en localStorage
    const savedFormData =
      JSON.parse(localStorage.getItem("addressFormData")) || {};
    setFormData(savedFormData);
  }, []);

  const getStepContent = (step, formData, setFormData) => {
    switch (step) {
      case 0:
        return (
          <AddressForm
            formData={formData}
            setFormData={setFormData}
            onValidChange={setValid}
          />
        );
      case 1:
        return (
          <PaymentForm
            formData={formData}
            setFormData={setFormData}
            onValidChange={setValid}
          />
        );
      case 2:
        return (
          <ReviewForm
            formData={formData}
            cartItems={cartContext.cartProducts}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  const handleNext = () => {
    const currentStep = steps[activeStep];
    const requiredFields = getRequiredFields(currentStep);

    if (ValidateForm(formData, requiredFields)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setValid(false);
    } else {
      toast.error("Completa todos los campos requeridos antes de continuar");
    }

    // Si se ha completado el último paso, elimina los datos del localStorage
    if (activeStep === steps.length - 1) {
      localStorage.removeItem("addressFormData");
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setValid(true);
  };

  const handleFormDataChange = (updatedFormData, isValid) => {
    setFormData(updatedFormData);
    setValid(isValid);

    // Almacenar los datos del formulario en localStorage
    localStorage.setItem("addressFormData", JSON.stringify(updatedFormData));
  };

  const getRequiredFields = (step) => {
    switch (step) {
      case "Dirección de Envío":
        return [
          "firstName",
          "lastName",
          "address",
          "phone",
          "city",
          "zip",
          "country",
        ];
      case "Detalles del Pago":
        return ["cardName", "cardNumber", "expDate", "cvv"];
      default:
        return [];
    }
  };

  return (
    <Grid
      container
      spacing={0}
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
        <Paper
          sx={{
            marginTop: 3,
            marginBottom: 3,
            padding: 2,
            "@media(min-width:600px)": {
              marginTop: 6,
              marginBottom: 6,
              padding: 3,
              width: 600,
              marginLeft: "auto",
              marginRight: "auto",
            },
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            align="center"
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
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, formData, handleFormDataChange)}
                <Grid
                  container
                  spacing={1}
                  justifyContent={activeStep !== 0 ? "flex-end" : "flex-start"}
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
                      variant="contained"
                      color="secondary"
                      onClick={handleNext}
                      disabled={false} // Habilita siempre el botón
                    >
                      {activeStep === steps.length - 1
                        ? "Realizar Pedido"
                        : "Siguiente"}
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
