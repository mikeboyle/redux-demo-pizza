import { useSelector } from 'react-redux';
import Search from './Search';
import Filters from './Filters';
import Item from './Item';

const Items = () => {
  const items = useSelector((state) => state.items);
  const search = useSelector((state) => state.search);
  // TODO: read selectedFilters from Redux; don't hard code
  const selectedFilters = [];

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

export default Items;
