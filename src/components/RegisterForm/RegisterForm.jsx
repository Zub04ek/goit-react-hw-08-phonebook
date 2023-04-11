import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import {
  Container,
  Form,
  FormField,
  SubmitButton,
} from './RegisterForm.styled';
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
} from '@chakra-ui/react';
import { UnlockIcon, EmailIcon, Icon } from '@chakra-ui/icons';
import { TiUserOutline } from 'react-icons/ti';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().required('Username is required!'),
  email: yup.string().email().required('Email is required!'),
  password: yup.string().min(10).required('Password is required!'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Container>
      <Heading color="#7fadf7">Register Form</Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            <Field type="text" name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <Icon as={TiUserOutline} boxSize={6} color="gray.300" />
                      }
                    />
                    <Input
                      {...field}
                      placeholder="Username"
                      border="1px solid #7fadf7"
                    />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </FormField>
          <FormField>
            <Field type="email" name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<EmailIcon color="gray.300" />}
                    />
                    <Input
                      {...field}
                      placeholder="Email"
                      border="1px solid #7fadf7"
                    />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </FormField>
          <FormField>
            <Field name="password">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<UnlockIcon color="gray.300" />}
                    />
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter password"
                      border="1px solid #7fadf7"
                      autoComplete="off"
                    />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </FormField>
          <SubmitButton type="submit">Register</SubmitButton>
        </Form>
      </Formik>
    </Container>
  );
};
