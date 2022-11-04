import { useDispatch, useSelector } from 'react-redux';
import { clickFilter } from './app/actions';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const handleFilterClick = (filter) => {
    dispatch(clickFilter(filter));
  };
  return (
    <div>
      {filters.map((filter) => (
        <button
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
