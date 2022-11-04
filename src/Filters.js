import { useSelector } from 'react-redux';

const Filters = () => {
  const filters = useSelector((state) => state.filters);
  // TODO: Read selectedFilters from Redux;
  const selectedFilters = [];

  const handleFilterClick = (filter) => {
    // TODO: Dispatch CLICK_FILTER action
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
    </div>
  );
};

export default Filters;
