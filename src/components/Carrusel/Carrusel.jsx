import React, {useContext, useState, useRef, useEffect} from 'react';
import {ProductContext} from '../../contexts/ContextProducts';
import CardProducts from '../../components/Card/CardProducts';
import {Box, Grid, IconButton} from '@mui/material';
import {ChevronLeft, ChevronRight} from '@mui/icons-material';

const Carrusel = ({renderType, category, oferta}) => {
  const {products} = useContext(ProductContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [maxVisibleCards, setMaxVisibleCards] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = 280;
      const newMaxVisibleCards = Math.floor(containerWidth / cardWidth);
      setMaxVisibleCards(newMaxVisibleCards);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const renderCards = () => {
    let visibleCards = [];

    if (renderType === 'category') {
      visibleCards = products.filter(
        (product) => product.category === category
      );
    } else if (renderType === 'oferta') {
      visibleCards = products.filter((product) => product.oferta === oferta);
    }

    return visibleCards
      .slice(currentIndex, currentIndex + maxVisibleCards)
      .map((product) => (
        <Grid item key={product.id} marginRight={2}>
          <CardProducts product={product} />
        </Grid>
      ));
  };

  const isLastCardVisible = currentIndex + maxVisibleCards >= products.length;

  return (
    <Box position='relative' marginBottom={2} overflow='hidden' px={3}>
      <Box ref={containerRef}>
        <Grid
          container
          justifyContent={'center'}
          alignItems='center'
          wrap='nowrap'
          my={3}
        >
          {renderCards()}
        </Grid>
      </Box>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: 2,
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.7)',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.9)',
          },
        }}
        onClick={handlePrevSlide}
        disabled={currentIndex === 0}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: 2,
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.7)',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.9)',
          },
        }}
        onClick={handleNextSlide}
        disabled={isLastCardVisible}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default Carrusel;
