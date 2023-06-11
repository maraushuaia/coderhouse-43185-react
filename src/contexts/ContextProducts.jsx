import React, {createContext, useEffect, useState} from 'react';
import {db} from '../FirebaseConfig';
import {collection, getDocs, doc, getDoc} from 'firebase/firestore';
import ProductNoFound from '../components/Error/ProductNoFound';

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

  const getProductById = async (productId) => {
    try {
      const productDoc = doc(db, 'products', productId);
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        return {
          ...productSnapshot.data(),
          id: productSnapshot.id,
        };
      } else {
        console.log('No product found with ID:', productId);
        return null;
      }
    } catch (error) {
      // <ProductNoFound />;
      console.error('Error fetching product:', error);
      return null;
    }
  };

  const contextValue = {
    products,
    isLoading,
    getProductById,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export {ProductContext, ContextProducts};
