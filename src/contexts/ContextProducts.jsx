import React, { createContext, useEffect, useState } from "react";
import { db } from "../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ProductContext = createContext();

const ContextProducts = ({ children }) => {
  const [products, setProducts] = useState([]);
  console.log("Context Products Inicializado (ContextProducts): ", products);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const itemsCollection = collection(db, "products");
    getDocs(itemsCollection).then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProducts(products);
      console.log("Context Products Recuperados: ", products);
    });
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

export { ProductContext, ContextProducts };
