import { useDispatch } from 'react-redux';
import { Input } from '@chakra-ui/react';
import { changeFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Input
      type="text"
      name="filter"
      onChange={handleChange}
      placeholder="Find contacts by name"
      w="360px"
      border="1px solid #7fadf7"
    />
  );
};
