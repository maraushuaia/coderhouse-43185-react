import React, {createContext, useEffect, useState} from 'react';

const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('largo del array => ', products.length);
    if (products.length === 0) {
      setIsLoading(true);
      fetch(process.env.REACT_APP_URL_LOCAL)
        .then((response) => response.json())
        .then((data) => {
          console.log('Datos de DATA ', data);
          setProducts(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const contextValue = {
    products,
    isLoading,
  };

  console.log('Carga productos en GlobalProvider:', products);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export {ProductContext, ProductProvider};
