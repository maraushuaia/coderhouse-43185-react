import {useEffect, useContext} from 'react';
import {ProductContext} from './ProviderProducts';
import {CategoriesContext} from './ProviderCategories';

const useSearchCategories = () => {
  const {products} = useContext(ProductContext);
  const [, setCategories] = useContext(CategoriesContext);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.category))
    );
    setCategories(uniqueCategories);
  }, [products, setCategories]);

  return null;
};

export default useSearchCategories;
