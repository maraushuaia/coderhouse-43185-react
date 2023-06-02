import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const AddressForm = ({formData, setFormData}) => {
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom my={2}>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='Nombre'
            fullWidth
            autoComplete='given-name'
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Apellido'
            fullWidth
            autoComplete='family-name'
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='address1'
            name='address1'
            label='Dirección'
            fullWidth
            autoComplete='shipping address-line1'
            value={formData.address1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='phone'
            name='phone'
            label='Teléfono'
            fullWidth
            autoComplete='phone'
            value={formData.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='city'
            name='city'
            label='Ciudad'
            fullWidth
            autoComplete='shipping address-level2'
            value={formData.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='state'
            name='state'
            label='Ciudad/Provincia/Región'
            fullWidth
            value={formData.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='zip'
            name='zip'
            label='Zip / Código Postal'
            fullWidth
            autoComplete='shipping postal-code'
            value={formData.zip}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='country'
            name='country'
            label='País'
            fullWidth
            autoComplete='shipping country'
            value={formData.country}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color='secondary'
                name='saveAddress'
                value='yes'
                checked={formData.saveAddress}
                onChange={handleChange}
              />
            }
            label='Utilizar esta dirección para los datos de pago'
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
