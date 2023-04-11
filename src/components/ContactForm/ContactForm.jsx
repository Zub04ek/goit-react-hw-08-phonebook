import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { Form, FormField, SubmitButton } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from '@chakra-ui/react';
import { PhoneIcon, Icon } from '@chakra-ui/icons';
import { TiUserOutline } from 'react-icons/ti';
import { addContact } from 'redux/contacts/operations';
import { selectItems } from 'redux/selectors';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  number: yup.string().min(7).max(7).required('Phone number is required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const toast = useToast();

  const handleSubmit = (values, { resetForm }) => {
    const isAlreadyInContacts = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isAlreadyInContacts) {
      toast({
        title: `${values.name} is already in contacts.`,
        position: 'top',
        status: 'info',
        duration: 3000,
      });
      resetForm();
      return;
    }

    dispatch(addContact({ name: values.name, number: values.number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormField>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          >
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
                    placeholder="Full name"
                    border="1px solid #7fadf7"
                  />
                </InputGroup>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </FormField>
        <FormField>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          >
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.number && form.touched.number}
              >
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <Input
                    {...field}
                    placeholder="Phone number"
                    border="1px solid #7fadf7"
                  />
                </InputGroup>
                <FormErrorMessage>{form.errors.number}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </FormField>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
  );
};
