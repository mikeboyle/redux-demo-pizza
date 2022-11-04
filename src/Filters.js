import { useDispatch, useSelector } from 'react-redux';
import { clickFilter } from './app/actions';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const selectedFilters = useSelector((state) => state.selectedFilters);

  const handleFilterClick = (filter) => {
    dispatch(clickFilter(filter));
  };

  const handleClearFilters = () => {
    // TODO: Dispatch CLEAR_FILTERS action
  };

  return (
    <div>
      {filters.map((filter) => (
        <button
          className={`Filter-button${
            selectedFilters.includes(filter) ? '--selected' : ''
          }`}
          key={filter}
          value={filter}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
      <button onClick={handleClearFilters}>Clear All</button>
    </div>
  );
};

export default Filters;
