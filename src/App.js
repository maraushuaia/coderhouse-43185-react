import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box} from '@mui/material';
import Rutas from './routers/Rutas';

function App() {
  return (
    <Box sx={{mb: 8}}>
      <Rutas />
    </Box>
  );
}

export default App;
