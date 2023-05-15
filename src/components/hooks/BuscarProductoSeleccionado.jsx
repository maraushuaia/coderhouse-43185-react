import {useEffect, useState} from 'react';

const BuscarProductoSeleccionado = ({id}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realizar la búsqueda de todos los productos desde la API y guardarlos en el estado
    fetch('API_URL')
      .then((response) => response.json())
      .then((data) => {
        // Guardar los productos en el estado
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Verificar si se ha cargado el listado de productos
    if (products.length > 0) {
      // Buscar el producto por su ID
      const foundProduct = products.find((product) => product.id === id);
      setProducts(foundProduct ? [foundProduct] : []);
    }
  }, []);
  console.log('dentro de Buscar Productos => ', products);

  return products;
};

export default BuscarProductoSeleccionado;
