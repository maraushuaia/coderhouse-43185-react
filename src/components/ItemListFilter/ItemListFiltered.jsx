import {useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import ItemListContainerView from '../ItemListContainer/ItemListContainerView';

const ItemListFiltered = () => {
  const {category} = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL_LOCAL)
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.category === category
        );
        setProducts(filteredProducts);
      })
      .catch((error) => {
        setError('Error al cargar los productos');
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return (
    <Box>
      <ItemListContainerView
        products={products}
        loading={loading}
        error={error}
      />
    </Box>
  );
};

export default ItemListFiltered;
