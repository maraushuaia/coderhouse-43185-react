import {useEffect, useState, useContext} from 'react';
import {ProductContext} from '../contexts/ContextProducts';

const useSearchProductID = (id) => {
  console.log('ID recibido para buscar (useSearchProductID): ', id);
  const {products} = useContext(ProductContext);
  console.log('Productos en Context Products: ', products);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === String(id));
    console.log('Producto encontrado: ', foundProduct);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError('Los detalles del producto no se encuentran disponibles');
    }
    setLoading(false);
  }, [id, products]);

  return {product, loading, error};
};

export default useSearchProductID;
