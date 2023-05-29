import {useContext, useEffect} from 'react';
import {ProductContext} from '../contexts/ProductContext';

const useFetchProducts = () => {
  const {updateProducts} = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = () => {
      fetch(process.env.REACT_APP_URL_LOCAL)
        .then((response) => response.json())
        .then((data) => updateProducts(data))
        .catch((error) => console.log('Error fetching products:', error));
    };

    fetchProducts();
  }, [updateProducts]);

  return;
};

export default useFetchProducts;
