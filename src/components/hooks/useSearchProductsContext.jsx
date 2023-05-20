import {useContext} from 'react';
import {ProductContext} from '../../contexts/ProviderProducts';

const useSearchProductsContext = () => {
  const {products} = useContext(ProductContext);
  console.log('Productos Recibidos en useSearchProductsContext: ', products);

  return products;
};

export default useSearchProductsContext;
