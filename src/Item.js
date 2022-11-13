import { connect } from 'react-redux';
import { addToCart } from './app/actions';

const Item = ({ handleAddToCart, item }) => {
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

const mapDispatchToProps = (dispatch) => ({
  handleAddToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(Item);
