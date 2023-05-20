import {useEffect, useContext} from 'react';
import {CategoriesContext} from '../../contexts/ProviderCategories';
import Error from '../Error/Error';

const FetchCategories = () => {
  const [, setCategories] = useContext(CategoriesContext);

  useEffect(() => {
    const fetchCategoriesFromBackend = () => {
      fetch('REACT_APP_DIRECTUS_API_CATEGORIES')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al obtener las categorías del backend');
          }
          return response.json();
        })
        .then((data) => {
          const categories = data.data.map((item) => item.name); // Asegúrate de ajustar la estructura de datos según la respuesta del backend
          setCategories(categories);
        })
        .catch((error) => {
          console.error('Error al obtener las categorías del backend:', error);
        });
    };

    fetchCategoriesFromBackend();
  }, [setCategories]);

  return null; // No se renderiza nada en este componente, solo se actualiza el estado de ProviderCategories
};

export default FetchCategories;
