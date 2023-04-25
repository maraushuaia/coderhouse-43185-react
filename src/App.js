import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Box, Container} from '@mui/material';
import BarMobile from './components/Navbar/BarMobile';
import NavbarRender from './components/Navbar/Navbar';

function App() {
  return (
    <Box>
      <NavbarRender />
      <Container maxWidth='xl'>
        <ItemListContainer/>
      </Container>
      <BarMobile />
    </Box>
  );
}

export default App;
