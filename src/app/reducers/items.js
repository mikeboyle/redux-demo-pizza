import actionTypes from '../actions/actionTypes';

const initialState = [];

const items = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default items;
