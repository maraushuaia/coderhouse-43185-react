import React, {createContext, useState} from 'react';

export const ContextFavorites = createContext();

export const ContextFavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((product) => product.id !== productId)
    );
  };

  return (
    <ContextFavorites.Provider
      value={{favorites, addToFavorites, removeFromFavorites}}
    >
      {children}
    </ContextFavorites.Provider>
  );
};
