// import React, {useContext, useState} from 'react';
// import {ProductContext} from '../contexts/ProviderProducts';
// import ItemListContainerView from '../components/ItemListContainer/ItemListContainerView';
// import ItemListContainerFilter from '../components/ItemListContainer/ItemListContainerFilter';
// import {Box} from '@mui/material';

// const CategoriesPage = () => {
//   const {products, isLoading} = useContext(ProductContext);
//   console.log('Productos detectados al entrar a MENU CATEGORIA: ', products);

//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   // Obtener las categorías únicas de los productos
//   const categories = Array.from(
//     new Set(products.map((product) => product.category))
//   );

//   // Filtrar los productos en función de la categoría seleccionada
//   const filteredProducts = selectedCategory
//     ? products.filter((product) => product.category === selectedCategory)
//     : products;

//   return (
//     <Box>
//       <ItemListContainerFilter
//         categories={categories}
//         onCategoryChange={handleCategoryChange}
//       />
//       <ItemListContainerView products={filteredProducts} loading={isLoading} />
//     </Box>
//   );
// };

// export default CategoriesPage;

import React, {useContext, useState, useEffect} from 'react';
import {ProductContext} from '../contexts/ProviderProducts';
import ItemListContainerView from '../components/ItemListContainer/ItemListContainerView';
import ItemListContainerFilter from '../components/ItemListContainer/ItemListContainerFilter';
import {Box} from '@mui/material';
import {CategoriesContext} from '../contexts/ProviderCategories';
import useSearchCategoriesAPI from '../components/hooks/useSearchCategoriesAPI';

const CategoriesPage = () => {
  const {products, isLoading} = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useContext(CategoriesContext);

  useSearchCategoriesAPI(setCategories);

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
        categories={categories}
        onCategoryChange={handleCategoryChange}
      />
      <ItemListContainerView products={filteredProducts} loading={isLoading} />
    </Box>
  );
};

export default CategoriesPage;
