const CartItem = ({ cartItem, index }) => {
  const handleRemoveFromCart = () => {
    // TODO: dispatch action to remove from cart
  };

  return (
    <article>
      {cartItem.name} ${cartItem.price.toFixed(2)}
      <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
    </article>
  );
};

export default CartItem;
