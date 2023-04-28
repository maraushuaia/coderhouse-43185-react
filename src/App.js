import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Box, Container } from "@mui/material";
import BarMobile from "./components/Navbar/BarMobile";
import NavbarRender from "./components/Navbar/Navbar";
import Contador from "./components/Contador/Contador";
import ProductList from "./components/Product/ProductList";
import ProductCarousel from "./components/Carrusel/CarruselView";

function App() {
  return (
    <Box sx={{ mb: 8 }}>
      <NavbarRender />
      <Container maxWidth="xl">
        {/* <ItemListContainer /> */}
        {/* <ProductList></ProductList> */}
        <ProductCarousel></ProductCarousel>
        <Contador stock={8}></Contador>
      </Container>

      <BarMobile />
    </Box>
  );
}

export default App;
