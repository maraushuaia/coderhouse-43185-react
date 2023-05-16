// Este componente busca un producto especifico en un array de productos, y lo devuelve en un objeto
import {useEffect, useState} from 'react';

const useSearchProductID = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_DIRECTUS_API_URL)
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find(
          (item) => Number(item.id) === Number(id)
        );
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
