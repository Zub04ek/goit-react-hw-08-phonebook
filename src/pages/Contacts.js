import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heading, Text, Spinner } from '@chakra-ui/react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading, selectItems } from 'redux/selectors';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Container } from '../components/Container.styled';
import { Filter } from '../components/Filter/Filter';
import { GlobalStyles } from '../components/Global.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Container>
        <GlobalStyles />
        <Heading color="#7fadf7">My phonebook</Heading>
        <ContactForm />
        <Heading color="#7fadf7">My contacts</Heading>
        <Filter />
        {isLoading && !error && (
          <Spinner speed="0.65s" color="#7fadf7" size="xl" />
        )}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Text>There are no contacts yet, try adding some:)</Text>
        )}
      </Container>
    </main>
  );
};

export default Contacts;
