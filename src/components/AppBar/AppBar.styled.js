import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

export const Header = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 2px solid #7fadf7;

  > nav {
    display: flex;
  }
`;
