import { Field, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <FilterLabel htmlFor="">
      Find contacts by name
      <Field type="text" name="filter" onChange={handleChange} />
    </FilterLabel>
  );
};
