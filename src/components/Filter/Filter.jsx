import { useDispatch, useSelector } from 'react-redux';
import { FilterInput } from './FilterList';
import { filterTask } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filter);

  return (
    <>
      <h3>Find contcts by name</h3>
      <FilterInput
        type="text"
        name="filter"
        value={filters}
        onChange={e => dispatch(filterTask(e.target.value))}
      />
    </>
  );
};

export default Filter;
