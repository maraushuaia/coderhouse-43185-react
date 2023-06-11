import React, {createContext, useEffect, useState} from 'react';
import {db} from '../FirebaseConfig';
import {collection, getDocs} from 'firebase/firestore';

const ProductContext = createContext();

const ContextProducts = ({children}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const itemsCollection = collection(db, 'products');
        const querySnapshot = await getDocs(itemsCollection);
        const productsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(productsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
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
