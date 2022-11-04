import actionTypes from '../actions/actionTypes';

const initialState = '';

const search = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default search;
