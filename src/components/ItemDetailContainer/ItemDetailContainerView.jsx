import React, {useState} from 'react';
import {Box, Grid} from '@mui/material';

const ItemDetailContainerView = ({images}) => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [imagenes, setImage] = useState({images});

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Grid
        sx={{
          display: {md: 'flex'},
          mb: 2,
        }}
        item
        xs={10}
        // flexDirection={{xs: 'row', sm: 'colum', md: 'colum', lg: 'colum'}}
        flexDirection={{xs: 'row', sm: 'column', md: 'column', lg: 'column'}}
      >
        <Box
          width={{xs: '290px', sm: '370px', md: '800px', lg: '800px'}}
          height={{xs: '340px', sm: '400px', md: '620px', lg: '620px'}}
          sx={{
            backgroundImage: `url(${selectedImage.url})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            borderRadius: '4px',
          }}
        />
        <Grid item xs={2}>
          <Box
            sx={{
              display: {xs: 'inline-flex', md: 'flex', lg: 'flex'},
              flexDirection: {xs: 'row', md: 'column', lg: 'colum'},
              alignItems: 'flex-start',
            }}
          >
            {imagenes.map((image, index) => (
              <Box
                key={index}
                width={{xs: '55px', sm: '75px', md: '100px', lg: '160px'}}
                height={{xs: '55px', sm: '75px', md: '100px', lg: '100px'}}
                sx={{
                  backgroundImage: `url(${image.url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  cursor: 'pointer',
                  border: selectedImage === image ? '2px solid black' : 'none',
                  borderRadius: '4px',
                  alignItems: 'center',
                  m: 1,
                }}
                onClick={() => handleImageSelect(image)}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetailContainerView;
