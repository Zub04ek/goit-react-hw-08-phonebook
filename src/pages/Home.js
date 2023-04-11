import { Flex, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <Flex as="main" justifyContent="center" alignItems="center" h="90vh">
      {!isLoggedIn ? (
        <Heading as="h1" color="#7fadf7">
          Your personal phonebook
        </Heading>
      ) : (
        <Heading as="h1" color="#7fadf7">
          {user.name}'s phonebook
        </Heading>
      )}
    </Flex>
  );
};

export default Home;
