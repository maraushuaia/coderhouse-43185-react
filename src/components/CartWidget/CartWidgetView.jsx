import {Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useContext} from 'react';
import {CartContext} from '../../contexts/ContextCartWidget';

const CartWidgetView = ({color, initial = 1}) => {
  const {getTotalQuantity} = useContext(CartContext);

  const total = parseInt(getTotalQuantity(), 10);

  return (
    <div>
      <Badge badgeContent={total} color='info'>
        <ShoppingCartIcon color={color} />
      </Badge>
    </div>
  );
};

export default CartWidgetView;
