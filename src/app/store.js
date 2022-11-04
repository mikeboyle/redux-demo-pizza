import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import items from './reducers/items';
import search from './reducers/search';
import filters from './reducers/filters';
import selectedFilters from './reducers/selectedFilters';
import cart from './reducers/cart';
import deliveryInfo from './reducers/deliveryInfo';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items,
    search,
    filters,
    selectedFilters,
    cart,
    deliveryInfo,
  },
  devTools: true,
});
