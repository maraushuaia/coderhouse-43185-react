import {useContext, useEffect, useState} from 'react';
import {ProductContext} from '../contexts/ContextProducts';

const useFilterProducts = ({property, value}) => {
  const {products} = useContext(ProductContext);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((product) => product[property] === value);
    setFilteredProducts(filtered);
  }, [products, property, value]);

  return filteredProducts;
};

export default useFilterProducts;
