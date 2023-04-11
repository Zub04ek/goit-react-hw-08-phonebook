import { useDispatch, useSelector } from 'react-redux';
import { Flex, Text, Button } from '@chakra-ui/react';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Flex gap="12px" alignItems="center">
      <Text fontWeight="700">Welcome, {user.name}</Text>
      <Button
        _hover={{
          background: '#7fadf7',
          color: '#f4f6f9',
        }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Flex>
  );
};
