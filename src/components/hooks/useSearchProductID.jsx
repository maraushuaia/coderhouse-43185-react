import {useEffect, useState} from 'react';

const useSearchProductID = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL_LOCAL)
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((product) => product.id === id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Los detalles del producto no se encuentran disponibles');
        }
      })
      .catch((error) => {
        setError('Error al cargar los detalles del producto');
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return {product, loading, error};
};

export default useSearchProductID;
