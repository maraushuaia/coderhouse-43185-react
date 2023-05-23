import { Box, CircularProgress, Container, Typography } from "@mui/material";
import CardProducts from "../Card/CardProducts";
import { Link } from "react-router-dom";

const ItemListContainerView = ({ products, loading }) => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de productos
      </Typography>

      {loading ? (
        <Box sx={{ display: "grid", justifyContent: "center" }}>
          <CircularProgress />
          loading...
        </Box>
      ) : (
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
          {products && products.length > 0 ? (
            products.map((product) => (
              <Link
                key={product.id}
                to={`/itemDetail/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <CardProducts product={product} />
              </Link>
            ))
          ) : (
            <Typography variant="body1">
              No hay productos disponibles
            </Typography>
          )}
        </Box>
      )}
    </Container>
  );
};
export default ItemListContainerView;
