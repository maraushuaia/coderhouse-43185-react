import React, {useState} from 'react';
import {Box, TextField, Button} from '@mui/material';

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Aqui insertaré codigo para efectuar la búsqueda: ${searchTerm}`
    );
  };

  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <TextField
        id='search-product'
        label='Buscar producto'
        variant='outlined'
        fullWidth
        sx={{mr: 1}}
        value={searchTerm}
        onChange={handleChange}
      />
      <Button variant='contained' color='secondary' onClick={handleSubmit}>
        Buscar
      </Button>
    </Box>
  );
};

export default SearchProduct;
