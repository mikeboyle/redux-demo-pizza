import { connect } from 'react-redux';
import { clickFilter, clearFilters } from './app/actions';

const Filters = ({
  filters,
  selectedFilters,
  handleClearFilters,
  handleFilterClick,
}) => {
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

const mapStateToProps = (state) => {
  const { filters, selectedFilters } = state;
  return { filters, selectedFilters };
};

const mapDispatchToProps = (dispatch) => ({
  handleClearFilters: () => dispatch(clearFilters()),
  handleFilterClick: (filter) => dispatch(clickFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
