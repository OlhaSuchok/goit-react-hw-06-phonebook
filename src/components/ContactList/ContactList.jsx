import { useDispatch, useSelector } from 'react-redux';
import { getContacts, setContactsFilter } from 'redux/selectors';
import { removeContactAction } from 'redux/contact/ContactSlice';
import {
  ContactListItem,
  ContactsList,
  ContactListButtonDelete,
} from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(setContactsFilter);

  const applyFilter = () => {
    if (contactsFilter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <ContactsList>
      {applyFilter().map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContactListButtonDelete
            type="button"
            onClick={() => dispatch(removeContactAction(contact.id))}
          >
            Delete
          </ContactListButtonDelete>
        </ContactListItem>
      ))}
    </ContactsList>
  );
}
