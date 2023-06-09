import React, { createContext, useState } from "react";

export const CartContext = createContext();

const ContextCartWidget = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // FUNCION PARA SABER SI UN PRODUCTO YA ESTA EN EL CARRITO
  const isInCart = (id) => {
    return cartProducts.some((elemento) => elemento.id === id);
  };

  // Función para agregar un producto al carrito
  const addToCart = (productId, quantity, productData) => {
    // Verificar si el producto ya está en el carrito
    const existingItem = isInCart(productId);

    if (existingItem) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      setCartProducts((prevItems) =>
        prevItems.map((item) => {
          if (item.id === productId) {
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
      const { stock, ...dataWithoutStock } = productData;
      setCartProducts((prevItems) => [
        ...prevItems,
        { id: parseInt(productId), quantity, ...dataWithoutStock },
      ]);
    }
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    console.log("Entró a elimianr el producto");
    console.log("Contenido del Carrito ANTES de eliminar: ", cartProducts);
    setCartProducts((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCartProducts([]);
  };

  // OBTENER EL TOTAL DE LAS CANTIDADES DE LOS ELEMENTOS DEL CARRITO
  const getTotalQuantity = () => {
    return cartProducts.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
  };

  // OBTENER EL PRECIO TOTAL DEL CARRITO
  const getTotalPrice = () => {
    let precioTotal = cartProducts.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);

    return precioTotal;
  };

  console.log("Contenido ACTUALIZADO del Carrito: ", cartProducts);

  const data = {
    cartProducts,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart,
    getTotalQuantity,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default ContextCartWidget;
