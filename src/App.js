import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, Container} from '@mui/material';
import BarMobile from './components/Navbar/BarMobile';
import NavbarRender from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SearchProduct from './components/Search/SearchContainer';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Rutas from './routers/Rutas';

function App() {
  return (
    <Box sx={{mb: 8}}>
      {/* <NavbarRender />
      <Container maxWidth='xl' sx={{display: {display: 'grid'}}}>
        <SearchProduct />
        <ItemListContainer />
      </Container>
      <Footer />
      <BarMobile /> */}
      <Rutas />
    </Box>
  );
}

export default App;
