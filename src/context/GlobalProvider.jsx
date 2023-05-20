import React, {createContext, useEffect, useState} from 'react';
import useSearchProducts from '../components/hooks/useSearchProducts';

// Creamos un contexto para almacenar el estado global
export const GlobalContext = createContext();

// Componente de Estado Global
const GlobalProvider = ({children}) => {
  const {products, loading} = useSearchProducts();
  const [productsGlobal, setProductsGlobal] = useState([]);

  useEffect(() => {
    if (!loading) {
      setProductsGlobal(products);
    }
  }, [products, loading]);

  return (
    <GlobalContext.Provider value={productsGlobal}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
