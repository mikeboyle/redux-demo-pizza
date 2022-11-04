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

export const clearFilters = () => {
  // TODO: Return a Redux action
  // type = CLEAR_FILTERS
  // Does this action need a payload??
};

// Accepts an item as input, returns an action
export const addToCart = (item) => {
  const payload = {
    id: item.id,
    name: item.name,
    price: item.price,
  };

  return {
    type: actionTypes.ADD_TO_CART,
    payload,
  };
};

// Accepts the index of the item to be removed
export const removeFromCart = (index) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: index,
});

export const updateDeliveryInfo = (field, value) => ({
  type: actionTypes.UPDATE_DELIVERY_INFO,
  payload: { field, value },
});
