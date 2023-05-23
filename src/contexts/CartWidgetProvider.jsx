import { createContext, useState } from "react";

// Crear el contexto para el estado global del carrito
export const CartContext = createContext();

const CartWidgetProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (productId, quantity) => {
    // Verificar si el producto ya está en el carrito
    const existingItem = cartItems.find((item) => item.productId === productId);

    if (existingItem) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      setCartItems((prevItems) =>
        prevItems.map((item) => {
          if (item.productId === productId) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        })
      );
    } else {
      // Si el producto no está en el carrito, agregarlo
      setCartItems((prevItems) => [...prevItems, { productId, quantity }]);
    }
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartWidgetProvider;
