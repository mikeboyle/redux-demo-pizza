import { configureStore } from '@reduxjs/toolkit';
import items from './reducers/items';
import search from './reducers/search';
import filters from './reducers/filters';
import cart from './reducers/cart';
import deliveryInfo from './reducers/deliveryInfo';

// TODO: add selectedFilters reducer to store
export const store = configureStore({
  reducer: {
    items,
    search,
    filters,
    cart,
    deliveryInfo,
  },
  devTools: true,
});
