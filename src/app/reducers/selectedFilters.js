import actionTypes from '../actions/actionTypes';

const initialState = [];

const selectedFilters = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLICK_FILTER:
      // if payload already in state, remove it
      // otherwise add it to the state
      const selectedFilter = action.payload;
      if (state.includes(selectedFilter)) {
        return state.filter((f) => f !== selectedFilter);
      } else {
        state.push(selectedFilter);
        return state;
      }
    default:
      return state;
  }
};

export default selectedFilters;
