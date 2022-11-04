import actionTypes from '../actions/actionTypes';

const initialState = [];

const selectedFilters = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLICK_FILTER:
      const selectedFilter = action.payload;
      if (state.includes(selectedFilter)) {
        return state.filter((f) => f !== selectedFilter);
      } else {
        return [...state, selectedFilter];
      }
    case actionTypes.CLEAR_FILTERS:
      // TODO: Remove all selected filters

      return state;
    default:
      return state;
  }
};

export default selectedFilters;
