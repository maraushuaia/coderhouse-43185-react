// import {Box} from '@mui/material';
// import React from 'react';

// const OfferPage = () => {
//   return <Box minHeight={'80vh'}>Offer Page</Box>;
// };

// export default OfferPage;

import React, { useContext, useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { ProductContext } from "../../contexts/ContextProducts";
import CardRelatedProduct from "../Card/CardRelatedProduct";

const OfferPage = () => {
  const { products } = useContext(ProductContext);
  const [offerProducts, setOfferProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => product.oferta);
    setOfferProducts(filteredProducts);
  }, [products]);

  return (
    <Grid
      container
      sx={{
        width: "100%",
        display: "grid",
        justifyContent: "left",
        gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr, 1fr, 1fr))",
      }}
      gap={{ xs: 1, sm: 6, md: 6, lg: 6 }}
      mb={3}
    >
      {offerProducts.length > 0 ? (
        offerProducts.map((product) => (
          <CardRelatedProduct
            key={product.id}
            img={product.image}
            imgPrincipal={product.imgPrincipal}
            alt={product.alt}
            price={product.price}
            extract={product.extract}
            variant={product.variant}
            stock={product.stock}
          />
        ))
      ) : (
        <Typography variant="body1">
          No hay productos en oferta en este momento.
        </Typography>
      )}
    </Grid>
  );
};

export default OfferPage;
