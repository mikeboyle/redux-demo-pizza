import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from './app/actions';

const Search = () => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearchInput}
        placeholder="Search by name"
      />
    </div>
  );
};

export default Search;
