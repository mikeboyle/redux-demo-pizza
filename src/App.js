import React, { useEffect } from 'react';
import Items from './Items';
import Cart from './Cart';
import { data } from './data';
import { connect } from 'react-redux';
import { setFilters, setItems } from './app/actions';
import './App.css';

/*
 * 1. Give a name to the anonymous function we called in useEffect
 * and treat it as a prop to the component.
 */
function App({ handleData }) {
  useEffect(() => {
    handleData(data);
  });

  return (
    <div className="App">
      <Items />
      <Cart />
    </div>
  );
}

/*
 * 2. mapDispatchToProps takes dispatch as an arg and returns an object.
 * Each key in the object is the name of a prop the component expects
 * and the value is a function that dispatches one or more actions.
 * Functions that were built with useDispatch are now used here
 */

const mapDispatchToProps = (dispatch) => {
  return {
    handleData: (data) => {
      // Set the initial items and filters
      dispatch(setItems(data));
      const filters = data.reduce((set, item) => {
        for (const tag of item.tags) {
          set.add(tag);
        }
        return set;
      }, new Set());
      dispatch(setFilters([...filters]));
    },
  };
};

/*
 * 3. We call connect with null (because there is no mapStateToProps here)
 * and mapDispatchToProps.
 * This returns a function that takes a React component (the App component we wrote above)
 * and returns a NEW React component that is connected to the Redux state.
 */
export default connect(null, mapDispatchToProps)(App);
