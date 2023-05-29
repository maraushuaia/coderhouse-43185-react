import React, {useContext, useState} from 'react';
import {ProductContext} from '../contexts/ContextProducts';
import ItemListContainerView from '../components/ItemListContainer/ItemListContainerView';
import ItemListContainerFilter from '../components/ItemListContainer/ItemListContainerFilter';
import {Box} from '@mui/material';

const CategoriesPage = () => {
  const {products, isLoading} = useContext(ProductContext);

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Obtener las categorías únicas de los productos
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  // Filtrar los productos en función de la categoría seleccionada
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <Box>
      <ItemListContainerFilter
        categories={categories}
        onCategoryChange={handleCategoryChange}
      />
      <ItemListContainerView products={filteredProducts} loading={isLoading} />
    </Box>
  );
};

export default CategoriesPage;
