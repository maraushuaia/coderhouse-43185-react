import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const ItemListFilter = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL_LOCAL)
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

  const goBack = () => {
    navigate('/productos');
  };

  return {product, loading, error, goBack};
};

export default ItemListFilter;
