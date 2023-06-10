import React, {useState, useEffect} from 'react';
import {Box, Grid} from '@mui/material';

const CardImages = ({images}) => {
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <Grid
        sx={{
          display: {md: 'flex'},
          mb: 2,
          justifyContent: 'center',
        }}
        ml={{xs: 0, sm: 3, md: 3, lg: 3}}
        flexDirection={{xs: 'row', sm: 'column', md: 'column', lg: 'row'}}
      >
        <Box
          width={{xs: '90%', sm: '370px', md: '780px', lg: '800px'}}
          height={{xs: '320px', sm: '400px', md: '600px', lg: '620px'}}
          sx={{
            backgroundImage: `url(${selectedImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            borderRadius: '4px',
            transition: 'background-image 0.3s ease',
            '&:hover': {
              cursor: 'pointer',
              backgroundImage: `url(${selectedImage})`,
            },
          }}
        />

        <Grid item xs={12} sm={8} md={8} lg={2} xl={2}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              flexDirection: {
                xs: 'row',
                sm: 'column',
                md: 'column',
                lg: 'column',
                xl: 'row',
              },
              alignItems: 'center',
            }}
          >
            {images.map((image, index) => (
              <Box
                key={index}
                width={{xs: '55px', sm: '75px', md: '100px', lg: '160px'}}
                height={{xs: '55px', sm: '75px', md: '100px', lg: '100px'}}
                sx={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  cursor: 'pointer',
                  border: selectedImage === image ? '2px solid black' : 'none',
                  borderRadius: '4px',
                  alignItems: 'center',
                  m: 1,
                  transition: 'border 0.3s ease',
                  '&:hover': {
                    border: '2px solid black',
                  },
                }}
                onMouseEnter={() => handleImageSelect(image)}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardImages;
