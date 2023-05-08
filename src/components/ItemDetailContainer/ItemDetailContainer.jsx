// Componente de renderizado del detalle del producto
// Con este componente se muestra el detalle del producto seleccionado, los datos del producto vienen por props

// import React, { useState } from "react";
// import { Box, Grid } from "@mui/material";

// const ItemDetailContainer = (articulo) => {
//   const [selectedImage, setSelectedImage] = useState(product.img[0]);
//   const [product, setProduct] = useState(articulo);

//   const handleImageSelect = (img) => {
//     setSelectedImage(img);
//   };

//   console.log(product);

//   return (
//     <Box
//       sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
//     >
//       <Grid
//         sx={{
//           display: { md: "flex" },
//           mb: 2,
//         }}
//         item
//         xs={10}
//         flexDirection={{ xs: "row", sm: "colum", md: "colum", lg: "colum" }}
//       >
//         <Box
//           width={{ xs: "290px", sm: "370px", md: "800px", lg: "800px" }}
//           height={{ xs: "340px", sm: "400px", md: "620px", lg: "620px" }}
//           sx={{
//             backgroundImage: `url(${selectedImage.url})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "contain",
//             borderRadius: "4px",
//           }}
//         />
//         <Grid item xs={2}>
//           <Box
//             sx={{
//               display: { xs: "inline-flex", md: "flex", lg: "flex" },
//               flexDirection: { xs: "row", md: "column", lg: "colum" },
//               alignItems: "flex-start",
//             }}
//           >
//             {product.images.map((image, index) => (
//               <Box
//                 key={index}
//                 width={{ xs: "55px", sm: "75px", md: "100px", lg: "160px" }}
//                 height={{ xs: "55px", sm: "75px", md: "100px", lg: "100px" }}
//                 sx={{
//                   backgroundImage: `url(${image.url})`,
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "contain",
//                   cursor: "pointer",
//                   border: selectedImage === image ? "2px solid black" : "none",
//                   borderRadius: "4px",
//                   alignItems: "center",
//                   m: 1,
//                 }}
//                 onClick={() => handleImageSelect(image)}
//               />
//             ))}
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ItemDetailContainer;

// componente que muestra el detalle de un producto
// componente dentro de un contenedor box que es una card más grande que las otras
// color de fondo de la card principal #003590
// color de fondo de la card secundaria #007590
// import const CardRender = ({img, alt, price, extract, variant}) => {
// import React from 'react';
// import {Box, Container, Typography} from '@mui/material';
// import CartCounter from '../Contador/Contador';

import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CartCounter from "../CartCounter/CartCounter";
import CardRelatedProduct from "../Card/CardRelatedProduct";
import ItemDetailContainerView from "./ItemDetailContainerView";

const ItemDetailContainer = ({ productDetails, relatedProducts }) => {
  const [related, setRelated] = useState(relatedProducts);

  console.log("Producto a Detallar: ", productDetails);
  console.log("Productos Relacionados: ", relatedProducts);

  return (
    <Box
      sx={{
        marginBottom: 4,
        backgroundColor: "white",
        borderRadius: "10px",
        mt: 2,
      }}
    >
      <Typography variant="h5" sx={{ my: 2, ml: 2 }}>
        {productDetails.name}
      </Typography>
      <Grid
        container
        sx={{
          display: { xs: "grid", sm: "grid", md: "flex" },
          flexDirection: { xs: "column", md: "row" },
          p: 2,
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <ItemDetailContainerView
            name={productDetails.name}
            description={productDetails.description}
            descriptionGeneral={productDetails.descriptionGeneral}
            price={productDetails.price}
            images={productDetails.img}
          />
          <Typography variant="span" sx={{ my: 2 }}>
            {productDetails.descriptionGeneral}
          </Typography>
        </Grid>

        <Grid item lg={4}>
          <Typography
            variant="h6"
            sx={{ color: "primary.main", mb: 2 }}
            ml={{ xs: 0, sm: 3, md: 3, lg: 3 }}
          >
            Precio ${productDetails.price}
          </Typography>
          <CartCounter stock={productDetails.stock} />
        </Grid>
      </Grid>
      <Grid item xs="colum">
        <Typography variant="h5" gutterBottom>
          Te puede interesar
        </Typography>

        <Container maxWidth="lg">
          <Grid
            sx={{
              width: "100%",
              display: "grid",
              justifyContent: "center",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            }}
            gap={{ xs: 1, sm: 6, md: 6, lg: 6 }}
            mb={3}
          >
            {related.map((relatedProduct) => (
              <CardRelatedProduct
                key={relatedProduct.id}
                img={relatedProduct.img}
                imgPrincipal={relatedProduct.imgPrincipal}
                alt={relatedProduct.alt}
                price={relatedProduct.price}
                extract={relatedProduct.extract}
                variant={relatedProduct.variant}
                stock={relatedProduct.stock}
              />
            ))}
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
};

export default ItemDetailContainer;
