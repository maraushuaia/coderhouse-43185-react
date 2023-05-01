import React, {useState} from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';

const DetalleDos = ({name, descriptionGeneral, price, images}) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant='h5' sx={{my: 2}}>
        {name}
      </Typography>

      <Grid
        sx={{
          display: {md: 'flex'},
          mb: 2,
        }}
        item
        xs={10}
        flexDirection={{xs: 'row', sm: 'colum', md: 'colum', lg: 'colum'}}
      >
        <Box
          width={{xs: '400px', md: '800px', lg: '800px'}}
          height={{xs: '420px', md: '620px', lg: '620px'}}
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
            {images.map((image, index) => (
              <Box
                key={index}
                width={{xs: '80px', md: '100px', lg: '100px'}}
                height={{xs: '80px', md: '100px', lg: '100px'}}
                sx={{
                  backgroundImage: `url(${image.url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  cursor: 'pointer',
                  border: selectedImage === image ? '2px solid black' : 'none',
                  borderRadius: '4px',
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

export default DetalleDos;
