import React, {createContext, useState, useEffect} from 'react';

// Crear el contexto de favoritos
export const ContextFavorites = createContext();

// Proveedor de favoritos
export const FavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favoritos');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Guardar los favoritos en el localStorage al actualizar
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favorites));
  }, [favorites]);

  // Función para agregar un producto a los favoritos
  const addFavorite = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  // Función para eliminar un producto de los favoritos
  const removeFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((product) => product.id !== productId)
    );
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
