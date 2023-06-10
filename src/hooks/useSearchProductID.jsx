import {useEffect, useState, useContext} from 'react';
import {ProductContext} from '../contexts/ContextProducts';

const useSearchProductID = (id) => {
  const {products} = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === String(id));

    if (foundProduct) {
      setProduct(foundProduct);
      localStorage.setItem('ProductDetail', JSON.stringify(foundProduct));
    } else {
      setError('Los detalles del producto no se encuentran disponibles');
    }
    setLoading(false);
  }, [id, products]);

  return {product, loading, error};
};

export default useSearchProductID;
