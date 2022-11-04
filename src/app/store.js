import { configureStore } from '@reduxjs/toolkit';
import items from './reducers/items';
import search from './reducers/search';
import filters from './reducers/filters';
import selectedFilters from './reducers/selectedFilters';
import deliveryInfo from './reducers/deliveryInfo';

// TODO: Add cart reducer
export const store = configureStore({
  reducer: {
    items,
    search,
    filters,
    selectedFilters,
    deliveryInfo,
  },
  devTools: true,
});
