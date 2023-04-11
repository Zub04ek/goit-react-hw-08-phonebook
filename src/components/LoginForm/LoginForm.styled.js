import styled from '@emotion/styled';
import { Form as FormikForm } from 'formik';
import { Button } from '@chakra-ui/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 40px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const FormField = styled.label`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 500;
`;

export const SubmitButton = styled(Button)`
  width: 200px;
  &:hover,
  :focus {
    background-color: #7fadf7;
    color: #f4f6f9;
  }
`;
