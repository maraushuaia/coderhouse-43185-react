import React from 'react';

import {ProviderProducts} from './ProviderProducts';
import useSearchCategories from '../components/hooks/useSearchCategories';

const ProviderCategories = ({children}) => {
  const categories = useSearchCategories();
  console.log('CATEGORIAS EN GLOBAL PROVIDER: ', categories);

  return (
    <ProviderProducts categories={categories}>{children}</ProviderProducts>
  );
};

export default ProviderCategories;
