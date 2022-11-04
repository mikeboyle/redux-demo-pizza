import actionTypes from '../actions/actionTypes';

// TODO: Set initial state
const initialState = null;

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // TODO: Add item to cart
      return state;
    case actionTypes.REMOVE_FROM_CART:
      // TODO: Remove the item at specified index
      return state;
    default:
      return state;
  }
};

export default cart;
