import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

const MorePage = () => {
  const handleAccountClick = () => {
    // Manejar la acción de acceder a la cuenta
  };

  const handlePreferencesClick = () => {
    // Manejar la acción de manejar preferencias
  };

  const handleVersionClick = () => {
    // Manejar la acción de obtener información de la versión
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Opciones de cuenta
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card onClick={handleAccountClick} sx={{ cursor: "pointer" }}>
              <CardContent>
                <AccountCircleIcon fontSize="large" />
                <Typography variant="subtitle1">Mi Cuenta</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card onClick={handlePreferencesClick} sx={{ cursor: "pointer" }}>
              <CardContent>
                <SettingsIcon fontSize="large" />
                <Typography variant="subtitle1">Preferencias</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card onClick={handleVersionClick} sx={{ cursor: "pointer" }}>
              <CardContent>
                <InfoIcon fontSize="large" />
                <Typography variant="subtitle1">
                  Versión de la Aplicación
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MorePage;
