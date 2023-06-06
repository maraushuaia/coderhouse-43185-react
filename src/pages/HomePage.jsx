//Con este componenten se muestra la lista de productos, se importa el archivo products.json y se muestra en pantalla
//Se importa el componente ItemDetailView para mostrar el detalle del producto al hacer click en el mismo

import { Container } from "@mui/material";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const HomePage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, minHeight: "80vh" }}>
      <ItemListContainer />
    </Container>
  );
};

export default HomePage;
