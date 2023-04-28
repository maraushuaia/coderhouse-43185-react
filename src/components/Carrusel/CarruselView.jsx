// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Button,
// } from "@mui/material";
// import Carousel from "react-material-ui-carousel";

// const ProductCarousel = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("./products.json")
//       .then((response) => response.json())
//       .then((data) => setProducts(data.products))
//       .catch((error) => console.error("Error fetching products: ", error));
//   }, []);

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Ofertas especiales
//       </Typography>
//       <Carousel
//         animation="slide"
//         autoPlay={false}
//         navButtonsAlwaysVisible={true}
//       >
//         {console.log("Products", products)}
//         {products.map((product) => (
//           <Box key={product.id} sx={{ m: 2 }}>
//             <Card sx={{ width: 300 }}>
//               <CardMedia
//                 component="img"
//                 image={product.image}
//                 alt={product.name}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   {product.name}
//                 </Typography>
//                 <Typography variant="h6" color="primary">
//                   {product.price}
//                 </Typography>
//                 {product.offer && (
//                   <Typography variant="subtitle1" color="secondary">
//                     ¡Oferta!
//                   </Typography>
//                 )}
//               </CardContent>
//               <CardActions>
//                 <Button size="small" color="primary">
//                   Agregar al carrito
//                 </Button>
//                 <Button size="small" color="secondary">
//                   Ver detalles
//                 </Button>
//               </CardActions>
//             </Card>
//           </Box>
//         ))}
//       </Carousel>
//     </Container>
//   );
// };

// export default ProductCarousel;

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
} from "@mui/material";

const Carrusel = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al buscar productos: ", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Productos en oferta R ODRIGO
      </Typography>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ display: "flex", overflowX: "scroll" }}>
          {products.map((product) => (
            <Box key={product.id} sx={{ minWidth: 300, mr: 2 }}>
              <Card>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Precio: ${product.price}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    ¡Oferta!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Agregar al carrito
                  </Button>
                  <Button size="small" color="secondary">
                    Ver detalles
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Carrusel;
