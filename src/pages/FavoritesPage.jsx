import React, { useContext } from "react";
import { ContextFavorites } from "../contexts/ContextFavorites";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  Button,
} from "@mui/material";
import CardProducts from "../components/Card/CardProducts";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const { favorites } = useContext(ContextFavorites);

  if (favorites.length === 0) {
    return (
      <Container maxWidth="xl" sx={{ mt: 4, minHeight: "80vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 10,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Todavía no agregaste ninguno.
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Ve a nuestro listado de productos, esperamos que muchos te gusten.
          </Typography>
          <Button component={Link} to="/" variant="contained" sx={{ mt: 2 }}>
            Ir a la página de inicio
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4, minHeight: "80vh" }}>
      <Box
        sx={{
          display: "grid",
        }}
        gridTemplateColumns={{
          xs: "repeat(auto-fit, minmax(140px, 1fr))",
          sm: "repeat(auto-fit, minmax(150px, 1fr))",
          md: "repeat(auto-fit, minmax(180px, 1fr))",
          lg: "repeat(auto-fit, minmax(190px, 1fr))",
        }}
        mb={2}
        gap={{ xs: 1.5, sm: 2, md: 3, lg: 4 }}
      >
        {favorites.map((product) => (
          <CardProducts key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  );
};

export default FavoritesPage;
