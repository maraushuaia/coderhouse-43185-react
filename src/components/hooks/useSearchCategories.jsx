import {useEffect, useState} from 'react';
import useSearchProductsContext from './useSearchProductsContext';

const useSearchCategories = () => {
  const products = useSearchProductsContext();
  const [categoriasUnicas, setCategoriasUnicas] = useState([]);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.category))
    );
    setCategoriasUnicas(uniqueCategories);
  }, [products]);
  console.log('CATEGORIAS UNICAS: ', categoriasUnicas);

  return categoriasUnicas;
};

export default useSearchCategories;
