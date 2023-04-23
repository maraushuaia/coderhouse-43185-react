import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavbarPrimaryApp from './components/Navbar/Navbar';
import ItemListContainerView from './components/ItemListContainer/ItemListContainerView';
import {Box, Container} from '@mui/material';
import EcommerceCard from './components/Card/CardView';
import BarMobile from './components/Navbar/BarMobile';

function App() {
  return (
    <Box>
      <NavbarPrimaryApp />
      <Container maxWidth='xl'>
        <ItemListContainerView greeting={'Bienvenidos al GREETING'} />
        <EcommerceCard />
      </Container>
      <BarMobile />
    </Box>
  );
}

export default App;
