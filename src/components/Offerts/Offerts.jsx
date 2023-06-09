import React from "react";
import { Container, Typography } from "@mui/material";
import { ProductContext } from "../../contexts/ContextProducts";
import OfferProductList from "../OfferProductList/OfferProductList";

const OfferPage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Ofertas
      </Typography>
      <ProductContext.Consumer>
        {(context) => <OfferProductList products={context.products} />}
      </ProductContext.Consumer>
    </Container>
  );
};

export default OfferPage;
