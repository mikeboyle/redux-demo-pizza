import { useDispatch, useSelector } from 'react-redux';
import { clickFilter } from './app/actions';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const selectedFilters = useSelector((state) => state.selectedFilters);

  const handleFilterClick = (filter) => {
    dispatch(clickFilter(filter));
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
