import { useSelector } from 'react-redux';
import { Link } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useColorMode, Button, Flex } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="nav" alignItems="center">
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};
