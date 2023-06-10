import React, {createContext, useState} from 'react';

// Crear el contexto de favoritos
export const ContextFavorites = createContext();

// Proveedor de favoritos
export const FavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  // Función para agregar un producto a los favoritos
  const addFavorite = (product) => {
    setFavorites([...favorites, product]);
  };

  // Función para eliminar un producto de los favoritos
  const removeFavorite = (productId) => {
    const updatedFavorites = favorites.filter(
      (product) => product.id !== productId
    );
    setFavorites(updatedFavorites);
  };

  // Verificar si un producto está en favoritos
  const isFavorite = (productId) => {
    return favorites.some((product) => product.id === productId);
  };

  // Valor proporcionado por el contexto
  const contextValue = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <ContextFavorites.Provider value={contextValue}>
      {children}
    </ContextFavorites.Provider>
  );
};
