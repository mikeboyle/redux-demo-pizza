import { useDispatch } from 'react-redux';
import { removeFromCart } from './app/actions';

const CartItem = ({ cartItem, index }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(index));
  };

  return (
    <article>
      {cartItem.name} ${cartItem.price.toFixed(2)}
      <button onClick={() => handleRemoveFromCart()}>Remove</button>
    </article>
  );
};

export default CartItem;
