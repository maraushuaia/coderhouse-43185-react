// import React, { useState, useEffect } from "react";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";

// const AddressForm = ({ formData, setFormData, onValidChange }) => {
//   const [valid, setValid] = useState(false);

//   useEffect(() => {
//     onValidChange(valid);
//   }, [valid, onValidChange]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     // Validar los campos requeridos en el estado formData
//     const requiredFields = [
//       "firstName",
//       "lastName",
//       "address",
//       "phone",
//       "city",
//       "zip",
//       "country",
//     ];

//     const isFormValid = requiredFields.every((field) =>
//       Boolean(formData[field]?.trim())
//     );

//     setValid(isFormValid);
//   }, [formData]);

//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom my={2}>
//         Shipping address
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="firstName"
//             name="firstName"
//             label="Nombre"
//             fullWidth
//             autoComplete="given-name"
//             value={formData.firstName || ""}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="lastName"
//             name="lastName"
//             label="Apellido"
//             fullWidth
//             autoComplete="family-name"
//             value={formData.lastName || ""}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             id="address"
//             name="address"
//             label="Dirección"
//             fullWidth
//             autoComplete="shipping address"
//             value={formData.address || ""}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             id="phone"
//             name="phone"
//             label="Teléfono"
//             fullWidth
//             autoComplete="phone"
//             value={formData.phone || ""}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="city"
//             name="city"
//             label="Ciudad"
//             fullWidth
//             autoComplete="shipping address-city"
//             value={formData.city || ""}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             id="state"
//             name="state"
//             label="Ciudad/Provincia/Región"
//             fullWidth
//             value={formData.state || ""}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="zip"
//             name="zip"
//             label="Zip / Código Postal"
//             fullWidth
//             autoComplete="shipping postal-code"
//             value={formData.zip || ""}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="country"
//             name="country"
//             label="País"
//             fullWidth
//             autoComplete="shipping country"
//             value={formData.country || ""}
//             onChange={handleChange}
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// };

// export default AddressForm;

import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const AddressForm = ({ formData, setFormData, onValidChange }) => {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    onValidChange(valid);
  }, [valid, onValidChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Validar los campos requeridos en el estado formData
    const requiredFields = [
      "firstName",
      "lastName",
      "address",
      "phone",
      "city",
      "zip",
      "country",
    ];

    const isFormValid = requiredFields.every((field) =>
      Boolean(formData[field]?.trim())
    );

    setValid(isFormValid);

    // Almacenar los datos del formulario en localStorage
    localStorage.setItem("addressFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    // Recuperar los datos del formulario almacenados en localStorage al cargar el componente
    const savedFormData =
      JSON.parse(localStorage.getItem("addressFormData")) || {};
    setFormData(savedFormData);
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom my={2}>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            value={formData.firstName || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellido"
            fullWidth
            autoComplete="family-name"
            value={formData.lastName || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Dirección"
            fullWidth
            autoComplete="shipping address"
            value={formData.address || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Teléfono"
            fullWidth
            autoComplete="phone"
            value={formData.phone || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="shipping address-city"
            value={formData.city || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Ciudad/Provincia/Región"
            fullWidth
            value={formData.state || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Código Postal"
            fullWidth
            autoComplete="shipping postal-code"
            value={formData.zip || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="País"
            fullWidth
            autoComplete="shipping country"
            value={formData.country || ""}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
