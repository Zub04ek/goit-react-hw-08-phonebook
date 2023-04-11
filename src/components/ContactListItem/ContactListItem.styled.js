import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

export const ContactCard = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width: 360px;
`;

export const DeleteButton = styled(Button)`
  &:hover,
  :focus {
    background-color: #7fadf7;
    color: #f4f6f9;
  }
`;
