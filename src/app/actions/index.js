import actionTypes from './actionTypes';

export const setItems = (items) => ({
  type: actionTypes.SET_ITEMS,
  payload: items,
});

export const setSearch = (search) => ({
  type: actionTypes.SET_SEARCH,
  payload: search,
});

export const setFilters = (filters) => ({
  type: actionTypes.SET_FILTERS,
  payload: filters,
});

export const clickFilter = (filter) => ({
  type: actionTypes.CLICK_FILTER,
  payload: filter,
});

export const addToCart = (item) => {
  // TODO: Accepts an item as input, returns an action
  // payload should be { id: <item id>, name: <item name>, price: <item price> }
};

// Accepts the index of the item to be removed
export const removeFromCart = (index) => {
  // TODO: Accepts the index of the item to be removed
  // payload is the index
};

export const updateDeliveryInfo = (field, value) => ({
  type: actionTypes.UPDATE_DELIVERY_INFO,
  payload: { field, value },
});
