import React, { useEffect } from 'react';
import Items from './Items';
import Cart from './Cart';
import { data } from './data';
import { useDispatch } from 'react-redux';
import { setFilters, setItems } from './app/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set the initial items and filters
    dispatch(setItems(data));
    const filters = data.reduce((set, item) => {
      for (const tag of item.tags) {
        set.add(tag);
      }
      return set;
    }, new Set());
    dispatch(setFilters([...filters]));
  });

  return (
    <div className="App">
      <Items />
      <Cart />
    </div>
  );
}

export default App;
