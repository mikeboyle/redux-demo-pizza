import { connect } from 'react-redux';
import CartItem from './CartItem';
import DeliveryInfo from './DeliveryInfo';

// Add default value to ensure cart is never undefined
const renderCartContents = (cart = []) => {
  if (cart.length === 0) {
    return <p>Cart is empty. Add something!</p>;
  }

  return (
    <>
      {cart.map((cartItem, index) => (
        <CartItem key={cartItem.id} cartItem={cartItem} index={index} />
      ))}
    </>
  );
};

const Cart = ({ cart }) => {
  return (
    <section className="Cart">
      <h1>Cart</h1>
      {renderCartContents(cart)}
      <DeliveryInfo />
    </section>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
