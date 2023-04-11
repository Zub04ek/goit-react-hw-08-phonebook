import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { List, ListItem } from '@chakra-ui/react';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List spacing={3}>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactListItem contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};
