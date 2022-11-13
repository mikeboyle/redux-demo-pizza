import { connect } from 'react-redux';
import Search from './Search';
import Filters from './Filters';
import Item from './Item';

/* 
  1. Treat data coming from Redux state as though they
  are props passed to the component.
  Here, that means: items, search, selectedFilters
  Write your JSX etc as though you have access to these
  props via the state.
  NOTICE that this means that items, search, and selectedFilters are
  included in the components props. With hooks, we don't do this.
*/
const Items = ({ items, search, selectedFilters }) => {
  const filterByTags = (items, filters) => {
    // if an item's tags include EVERY selected filter, include it
    return items.filter((item) => {
      return filters.every((filter) => item.tags.includes(filter));
    });
  };

  const filterItems = (items, search, selectedFilters) => {
    const filteredBySearch = search
      ? items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : items;

    const filteredByTags =
      selectedFilters.length > 0
        ? filterByTags(filteredBySearch, selectedFilters)
        : filteredBySearch;

    return filteredByTags;
  };

  const itemsToDisplay = filterItems(items, search, selectedFilters);
  return (
    <section className="Items">
      <h1>Items</h1>
      <Search />
      <Filters />
      <div className="Items-List">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

/*
 * 2. OUTSIDE your component, write your mapStateToProps function.
 * This function takes the Redux state as an argument
 * and returns an object whose keys are your component's props
 * that come from state.
 * Here, again that means: items, search, selectedFilters
 * This function is conceptually the same as useSelector
 */
const mapStateToProps = (state) => {
  const { items, search, selectedFilters } = state;
  return { items, search, selectedFilters };
};

/*
 * This component does not dispatch any actions, but if it did, we would
 * write our mapDispatchToProps function here as well.
 */

/*
 * 3. Finally, use the connect function which connects your component
 * to the state.
 * connect() takes 3 positional args, any of which can be null:
 * - mapStateToProps
 * - mapDispatchToProps
 * - mergeProps
 * connect() then returns a function ...
 * ...which takes your original component as an argument
 * ...and returns a NEW component that is connected to the state
 */
export default connect(mapStateToProps)(Items);
