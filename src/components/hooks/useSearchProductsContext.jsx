import { useContext } from "react";
import { ProductContext } from "../../contexts/ProviderProducts";

const useSearchProductsContext = () => {
  const { products } = useContext(ProductContext);

  return products;
};

export default useSearchProductsContext;
