// import {
//   Box,
//   CircularProgress,
//   Container,
//   Grid,
//   Typography,
// } from "@mui/material";
// import { useParams } from "react-router-dom";
// import useSearchProductID from "../../hooks/useSearchProductID";
// import CardImages from "../Card/CardImages";
// import Counter from "../Counter/Counter";
// import CardRelatedProduct from "../Card/CardRelatedProduct";

// const ItemDetailContainer = () => {
//   const { id } = useParams();
//   console.log("ID producto a Recuperar (ItemDetailContainer): ", id);
//   const { product, loading, error } = useSearchProductID(id);
//   console.log("ID producto Recuperardo (ItemDetailContainer): =>", id);
//   console.log("Producto recuperado (ItemDetailContainer): =>", product);

//   if (loading) {
//     return (
//       <Box sx={{ display: "grid", justifyContent: "center" }}>
//         <CircularProgress />
//         loading...
//       </Box>
//     );
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <Container maxWidth="xl" sx={{ mt: 4 }}>
//       <Box
//         sx={{
//           marginBottom: 4,
//           backgroundColor: "white",
//           borderRadius: "10px",
//           mt: 2,
//         }}
//       >
//         <Typography variant="h5" sx={{ ml: 2, mb: 2 }}>
//           {product.name}
//         </Typography>
//         <Grid
//           container
//           sx={{
//             display: { xs: "grid", sm: "grid", md: "flex" },
//             flexDirection: { xs: "column", md: "row" },
//           }}
//         >
//           <Grid item xs={12} sm={12} md={12} lg={8}>
//             {console.log(
//               "Imágenes del producto (ItemDetailContainer): ",
//               product.imageAditional
//             )}

//             {/* Aquí renderizo las imágenes adicionales del producto */}
//             <CardImages images={product.imageAditional} />
//             <Typography variant="span" sx={{ ml: 2, mr: 2 }}>
//               {product.descriptionLong}
//             </Typography>
//           </Grid>

//           <Grid item lg={4}>
//             <Typography
//               variant="h6"
//               sx={{ color: "primary.main", mb: 2 }}
//               ml={{ xs: 0, sm: 3, md: 3, lg: 3 }}
//               textAlign={"center"}
//               marginTop={{ xs: 3, sm: 0, md: 0, lg: 0 }}
//             >
//               Precio ${product.price}
//             </Typography>
//             <Counter
//               stock={product.stock}
//               idProduct={id}
//               productData={product}
//             />
//           </Grid>
//         </Grid>

//         <Grid>
//           <Typography variant="h5" gutterBottom>
//             Te puede interesar
//           </Typography>

//           <Container maxWidth="lg">
//             <Grid
//               sx={{
//                 width: "100%",
//                 display: "grid",
//                 justifyContent: "center",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
//               }}
//               gap={{ xs: 1, sm: 6, md: 6, lg: 6 }}
//               mb={3}
//             >
//               <h3>Acá irán los productos relacionados que se ofrecerán</h3>
//               {related.map((relatedProduct) => (
//                 <CardRelatedProduct
//                   key={relatedProduct.id}
//                   img={relatedProduct.img}
//                   imgPrincipal={relatedProduct.imgPrincipal}
//                   alt={relatedProduct.alt}
//                   price={relatedProduct.price}
//                   extract={relatedProduct.extract}
//                   variant={relatedProduct.variant}
//                   stock={relatedProduct.stock}
//                 />
//               ))}
//             </Grid>
//           </Container>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default ItemDetailContainer;

import React, { useContext } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useSearchProductID from "../../hooks/useSearchProductID";
import CardImages from "../Card/CardImages";
import Counter from "../Counter/Counter";
import CardRelatedProduct from "../Card/CardRelatedProduct";
import { ProductContext } from "../../contexts/ContextProducts";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { product, loading, error } = useSearchProductID(id);
  const { products } = useContext(ProductContext);

  if (loading) {
    return (
      <Box sx={{ display: "grid", justifyContent: "center" }}>
        <CircularProgress />
        loading...
      </Box>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Filtrar productos relacionados por categoría, excluyendo el producto actual
  const relatedProducts = products.filter(
    (relatedProduct) =>
      relatedProduct.category === product.category &&
      relatedProduct.id !== product.id
  );
  console.log(
    "Productos relacionados (ItemDetailContainer): ",
    relatedProducts
  );

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box
        sx={{
          marginBottom: 4,
          backgroundColor: "white",
          borderRadius: "10px",
          mt: 2,
        }}
      >
        <Typography variant="h5" sx={{ ml: 2, mb: 2 }}>
          {product.name}
        </Typography>
        <Grid
          container
          sx={{
            display: { xs: "grid", sm: "grid", md: "flex" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <CardImages images={product.imageAditional} />
            <Box px={1.5}>
              <Typography variant="span">{product.descriptionLong}</Typography>
            </Box>
          </Grid>

          <Grid item lg={4}>
            <Typography
              variant="h6"
              sx={{ color: "primary.main", mb: 2 }}
              ml={{ xs: 0, sm: 3, md: 3, lg: 3 }}
              textAlign={"center"}
              marginTop={{ xs: 3, sm: 0, md: 0, lg: 0 }}
            >
              Precio ${product.price}
            </Typography>
            <Counter
              stock={product.stock}
              idProduct={id}
              productData={product}
            />
          </Grid>
        </Grid>

        <Grid ml={2} mt={5}>
          <Typography variant="h6" gutterBottom>
            Te puede interesar
          </Typography>

          <Container maxWidth="lg">
            <Grid
              sx={{
                width: "100%",
                display: "grid",
                justifyContent: "left",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(170px, 1fr, 1fr, 1fr))",
              }}
              gap={{ xs: 1, sm: 6, md: 6, lg: 6 }}
              mb={3}
            >
              {relatedProducts.length > 0 ? (
                relatedProducts.map((relatedProduct) => (
                  <CardRelatedProduct
                    key={relatedProduct.id}
                    img={relatedProduct.image}
                    imgPrincipal={relatedProduct.imgPrincipal}
                    alt={relatedProduct.alt}
                    price={relatedProduct.price}
                    extract={relatedProduct.extract}
                    variant={relatedProduct.variant}
                    stock={relatedProduct.stock}
                  />
                ))
              ) : (
                <Typography variant="body1">
                  Por el momento, no tenemos otros productos relacionados que
                  mostrarte.
                </Typography>
              )}
            </Grid>
          </Container>
        </Grid>
      </Box>
    </Container>
  );
};

export default ItemDetailContainer;
