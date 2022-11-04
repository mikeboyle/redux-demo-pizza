import actionTypes from '../actions/actionTypes';

const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return [...state, action.payload];
    case actionTypes.REMOVE_FROM_CART:
      // Remove the item at specified index
      const idxToRemove = action.payload;
      if (idxToRemove < 0 || idxToRemove > state.length - 1) {
        return state;
      } else {
        return [
          ...state.slice(0, idxToRemove),
          ...state.slice(idxToRemove + 1),
        ];
      }
    default:
      return state;
  }
};

export default cart;
