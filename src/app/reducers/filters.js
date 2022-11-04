import actionTypes from '../actions/actionTypes';

const initialState = [];

const filters = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FILTERS:
      return action.payload;
    default:
      return state;
  }
};

export default filters;
