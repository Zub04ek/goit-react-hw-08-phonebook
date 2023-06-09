import styled from '@emotion/styled';
import { Form as FormikForm } from 'formik';
import { Button } from '@chakra-ui/react';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 20px;
  border: 1px solid #7fadf7;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const FormField = styled.label`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 500;
`;

export const SubmitButton = styled(Button)`
  &:hover,
  :focus {
    background-color: #7fadf7;
    color: #f4f6f9;
  }
`;
