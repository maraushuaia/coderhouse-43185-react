// import {useContext} from 'react';
// import {ProductContext, ProductProvider} from '../contexts/ProductProvider';
// import ItemListContainerView from '../components/ItemListContainer/ItemListContainerView';
// import ItemListContainerFilter from '../components/ItemListContainer/ItemListContainerFilter';
// import {Box} from '@mui/material';

// // Componente para renderizar los productos
// const Categories = () => {
//   const {products, isLoading} = useContext(ProductContext);
//   console.log('Productos detectados al entrar a MENU CATEGORIA: ', products);

//   return (
//     <Box>
//       <ItemListContainerFilter />
//       <ItemListContainerView products={products} loading={isLoading} />
//     </Box>
//   );
// };

// export default Categories;

import React, {useContext, useState} from 'react';
import {ProductContext, ProductProvider} from '../contexts/ProviderProducts';
import ItemListContainerView from '../components/ItemListContainer/ItemListContainerView';
import ItemListContainerFilter from '../components/ItemListContainer/ItemListContainerFilter';
import {Box} from '@mui/material';

const CategoriesPage = () => {
  const {products, isLoading} = useContext(ProductContext);
  console.log('Productos detectados al entrar a MENU CATEGORIA: ', products);

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filtrar los productos en función de la categoría seleccionada
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <Box>
      <ItemListContainerFilter
        categories={products.map((product) => product.category)}
        onCategoryChange={handleCategoryChange}
      />
      <ItemListContainerView products={filteredProducts} loading={isLoading} />
    </Box>
  );
};

export default CategoriesPage;
