import actionTypes from '../actions/actionTypes';

// TODO: What should initial state be?
const initialState = null;

const selectedFilters = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLICK_FILTER:
      // TODO: Implement toggle filter
      // if payload already in state, remove it
      // otherwise add it to the state

      return state;
    default:
      return state;
  }
};

export default selectedFilters;
