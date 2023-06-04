// import React, {useEffect} from 'react';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';

// const PaymentForm = ({formData = {}, onFormDataChange, onValidChange}) => {
//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     onFormDataChange((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const requiredFields = ['cardName', 'cardNumber', 'expDate', 'cvv'];
//     return requiredFields.every((field) => Boolean(formData[field]?.trim()));
//   };

//   useEffect(() => {
//     const isFormValid = validateForm();
//     onValidChange(isFormValid);
//   }, [formData, onValidChange]);

//   const isFieldEmpty = (fieldName) => {
//     const fieldValue = formData[fieldName];
//     return !fieldValue || fieldValue.trim().length === 0;
//   };

//   return (
//     <React.Fragment>
//       <Typography variant='h6' gutterBottom my={2}>
//         Método de Pago
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id='cardName'
//             name='cardName'
//             label='Nombre en la Tarjeta'
//             fullWidth
//             autoComplete='cc-name'
//             value={formData.cardName || ''}
//             onChange={handleChange}
//             error={isFieldEmpty('cardName')}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id='cardNumber'
//             name='cardNumber'
//             label='Número de Tarjeta'
//             fullWidth
//             autoComplete='cc-number'
//             value={formData.cardNumber || ''}
//             onChange={handleChange}
//             error={isFieldEmpty('cardNumber')}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id='expDate'
//             name='expDate'
//             label='Vencimiento'
//             fullWidth
//             autoComplete='cc-exp'
//             value={formData.expDate || ''}
//             onChange={handleChange}
//             error={isFieldEmpty('expDate')}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id='cvv'
//             name='cvv'
//             label='CVV'
//             helperText='Ingrese los 3 dígitos de la parte posterior de la tarjeta'
//             fullWidth
//             autoComplete='cc-csc'
//             value={formData.cvv || ''}
//             onChange={handleChange}
//             error={isFieldEmpty('cvv')}
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// };

// export default PaymentForm;

import React, {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const PaymentForm = ({
  formData = {},
  onFormDataChange,
  onValidChange,
  isNextClicked,
}) => {
  const handleChange = (e) => {
    const {name, value} = e.target;
    onFormDataChange((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const requiredFields = ['cardName', 'cardNumber', 'expDate', 'cvv'];
    return requiredFields.every((field) => Boolean(formData[field]?.trim()));
  };

  useEffect(() => {
    const isFormValid = isNextClicked && validateForm();
    onValidChange(isFormValid);
  }, [formData, isNextClicked, onValidChange]);

  const isFieldEmpty = (fieldName) => {
    const fieldValue = formData[fieldName];
    return !fieldValue || fieldValue.trim().length === 0;
  };

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom my={2}>
        Método de Pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cardName'
            name='cardName'
            label='Nombre en la Tarjeta'
            fullWidth
            autoComplete='cc-name'
            value={formData.cardName || ''}
            onChange={handleChange}
            error={isNextClicked && isFieldEmpty('cardName')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cardNumber'
            name='cardNumber'
            label='Número de Tarjeta'
            fullWidth
            autoComplete='cc-number'
            value={formData.cardNumber || ''}
            onChange={handleChange}
            error={isNextClicked && isFieldEmpty('cardNumber')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='expDate'
            name='expDate'
            label='Vencimiento'
            fullWidth
            autoComplete='cc-exp'
            value={formData.expDate || ''}
            onChange={handleChange}
            error={isNextClicked && isFieldEmpty('expDate')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cvv'
            name='cvv'
            label='CVV'
            helperText='Ingrese los 3 dígitos de la parte posterior de la tarjeta'
            fullWidth
            autoComplete='cc-csc'
            value={formData.cvv || ''}
            onChange={handleChange}
            error={isNextClicked && isFieldEmpty('cvv')}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentForm;
