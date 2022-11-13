import { connect } from 'react-redux';
import { setSearch } from './app/actions';

const Search = ({ search, handleSearchInput }) => {
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

const mapStateToProps = (state) => {
  const { search } = state;
  return { search };
};
/*
 * mapDispatchToProps also returns an object whose keys
 * are the props your component exepcts to receive.
 * The values are going to be functions that call dispatch(some action)
 */
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInput: (e) => dispatch(setSearch(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
