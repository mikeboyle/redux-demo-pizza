const Item = ({ item }) => {
  const handleAddToCart = (item) => {
    // TODO: dispatch add to cart action
  };

  return (
    <article className="Item">
      <p>
        <b>{item.name}</b> <span>${item.price.toFixed(2)}</span>
      </p>
      <p>{item.shortDescription}</p>
      <p>Categories: {item.tags.join(', ')}</p>
      <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
    </article>
  );
};

export default Item;
