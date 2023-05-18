import { useEffect, useState } from "react";

const useSearchProducts = (id = null) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL_LOCAL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);

        if (id) {
          const foundProduct = data.find(
            (item) => Number(item.id) === Number(id)
          );
          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            setError("Los detalles del producto no se encuentran disponibles");
          }
        }
      })
      .catch((error) => {
        setError("Error al cargar los productos");
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (id) {
    return { product, loading, error };
  } else {
    return { products, loading };
  }
};

export default useSearchProducts;
