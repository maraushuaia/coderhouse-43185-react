import ItemListContainerView from './ItemListContainerView';
import {ProductContext} from '../../contexts/ProductProvider';
import {useContext} from 'react';

const ItemListContainer = () => {
  const {products, isLoading} = useContext(ProductContext);

  return <ItemListContainerView products={products} loading={isLoading} />;
};

export default ItemListContainer;
