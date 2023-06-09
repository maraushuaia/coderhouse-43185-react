import React, { useState } from "react";
import { Typography, TextField, Button, Container, Grid } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar las credenciales aquí, por ejemplo, haciendo una solicitud a un backend o comprobando en una base de datos

    if (isSignUp) {
      // Simulamos el proceso de crear una cuenta
      // Aquí puedes implementar la lógica real para crear una cuenta en tu backend o base de datos
      if (email && password && firstName && lastName && phone) {
        // Validación de campos
        alert("Cuenta creada exitosamente");
        setIsSignUp(false); // Volvemos al modo de inicio de sesión después de crear la cuenta
      } else {
        alert("Por favor, complete todos los campos");
      }
    } else {
      // Simulamos el proceso de inicio de sesión
      // Aquí puedes implementar la lógica real para verificar las credenciales en tu backend o base de datos
      // Simulamos una verificación exitosa
      if (email === "admin@example.com" && password === "admin123") {
        setIsLoggedIn(true);
        alert("Inicio de sesión exitoso");
      } else {
        alert("Credenciales inválidas");
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setPhone("");
  };

  if (isLoggedIn) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Bienvenido, {email}!
        </Typography>
        <Button variant="contained" onClick={handleLogout} fullWidth>
          Cerrar sesión
        </Button>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="sm" sx={{ minHeight: "80vh" }}>
        <Typography variant="h4" align="center" gutterBottom>
          {isSignUp ? "Crear cuenta" : "Iniciar sesión"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Grid item xs={12}>
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Teléfono"
                    variant="outlined"
                    fullWidth
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <TextField
                label="Correo Electrónico"
                variant="outlined"
                fullWidth
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                color={isSignUp ? "success" : "secondary"}
              >
                {isSignUp ? "Crear cuenta" : "Iniciar sesión"}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
                {isSignUp ? (
                  <>
                    ¿Ya tienes una cuenta?{" "}
                    <Button
                      color="secondary"
                      onClick={() => setIsSignUp(false)}
                    >
                      Iniciar sesión
                    </Button>
                  </>
                ) : (
                  <>
                    ¿No tienes una cuenta?{" "}
                    <Button color="secondary" onClick={() => setIsSignUp(true)}>
                      Crear cuenta
                    </Button>
                  </>
                )}
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
};

export default LoginPage;
