import { useEffect, useState } from "react";
import useSearchProducts from "../hooks/useSearchProducts";

const useSearchCategories = () => {
  const { products } = useSearchProducts();
  const [categoriasUnicas, setCategoriasUnicas] = useState([]);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.category))
    );
    setCategoriasUnicas(uniqueCategories);
  }, [products]);

  return categoriasUnicas;
};

export default useSearchCategories;
