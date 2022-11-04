import CartItem from './CartItem';
import DeliveryInfo from './DeliveryInfo';

const renderCartContents = (cart) => {
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

const Cart = () => {
  // TODO: Read cart from state; don't hardcode
  const cart = [];
  return (
    <section className="Cart">
      <h1>Cart</h1>
      {renderCartContents(cart)}
      <DeliveryInfo />
    </section>
  );
};

export default Cart;
