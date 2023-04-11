import { ContactCard, DeleteButton } from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ListIcon, Text, Flex } from '@chakra-ui/react';
import { TiUserOutline } from 'react-icons/ti';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactCard>
      <Flex>
        <ListIcon as={TiUserOutline} boxSize={6} color="#7fadf7" />
        <Text>
          {name}: {number}
        </Text>
      </Flex>
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ContactCard>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
