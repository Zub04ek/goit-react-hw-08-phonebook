import { GlobalStyles } from 'components/Global.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Spinner, AbsoluteCenter, Box } from '@chakra-ui/react';

export const SharedLayout = () => {
  return (
    <Box maxWidth="960px" margin="0 auto" padding="0 24px">
      <GlobalStyles />
      <AppBar />
      <Suspense
        fallback={
          <Box position="relative" h="100vh">
            <AbsoluteCenter>
              <Spinner speed="0.65s" color="#7fadf7" size="xl" />
            </AbsoluteCenter>
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
};
