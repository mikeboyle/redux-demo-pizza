import { connect } from 'react-redux';
import { removeFromCart } from './app/actions';

const CartItem = ({ cartItem, handleRemoveFromCart, index }) => {
  return (
    <article>
      {cartItem.name} ${cartItem.price.toFixed(2)}
      <button onClick={() => handleRemoveFromCart()}>Remove</button>
    </article>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { index } = ownProps;
  return {
    handleRemoveFromCart: () => dispatch(removeFromCart(index)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
