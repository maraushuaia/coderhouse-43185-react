import ItemListContainerView from "./ItemListContainerView";
import useSearchProducts from "../hooks/useSearchProducts";

const ItemListContainer = () => {
  // En esta sección busco los productos en la API usando useSearchProducts
  const { products, loading } = useSearchProducts();

  return <ItemListContainerView products={products} loading={loading} />;
};

export default ItemListContainer;
