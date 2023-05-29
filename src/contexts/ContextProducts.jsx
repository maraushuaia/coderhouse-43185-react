import React, {createContext, useEffect, useState} from 'react';

const ProductContext = createContext();

const ContextProducts = ({children}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      setIsLoading(true);
      fetch(process.env.REACT_APP_URL_LOCAL)
        .then((response) => response.json())
        .then((data) => {
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

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export {ProductContext, ContextProducts};
