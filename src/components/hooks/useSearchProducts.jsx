// Este componente solo efectúa la busqueda de productos en la API que le indico mediante variables de entorno
import { useEffect, useState } from "react";

const useSearchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(
      "Variable Entorno para el Fetch => ",
      process.env.REACT_APP_DIRECTUS_API_URL
    );
    fetch(process.env.REACT_APP_DIRECTUS_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log("Productos Encontrados por Busqueda => ", products);
  return { products, loading };
};

export default useSearchProducts;
