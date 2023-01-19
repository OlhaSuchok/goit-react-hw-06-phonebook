import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box/Box';
import ContactForm from './ContactForm/ContactForm';
import { ContactFormTitle } from './ContactFormTitle/ContactFormTitle';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import {
  addContactAction,
  removeContactAction,
} from 'redux/contact/ContactSlice';
import { filterContactsAction } from 'redux/filters/filterSlice';
import { getContacts, setContactsFilter } from 'redux/selectors';

// const CONTACTS_LOCAL_STORAGE = 'contacts';

export default function PhoneBoock() {
  // const [contacts, setContacts] = useLocalStorage(CONTACTS_LOCAL_STORAGE, [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  // const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(setContactsFilter);

  console.log('contacts', contacts);
  console.log('filter', contactsFilter);

  // const contact = useSelector(getContacts);

  const handleSubmit = contact => {
    console.log(contacts);
    const newContact = { ...contact, id: nanoid() };
    console.log(newContact);
    const isContact = contacts.find(
      contact => contact.name === newContact.name
    );

    if (isContact) {
      alert(`${contact.name} is already in contacts`);
    } else {
      // setContacts(prevState => {
      //   return [...prevState, newContact];
      // });
      dispatch(addContactAction(newContact));
    }
  };

  const changeFilter = event => {
    // setFilter(event.target.value);
    dispatch(filterContactsAction(event.target.value));
    console.log(contactsFilter);
  };

  const onRemoveBtn = id => {
    // setContacts(prevState => prevState.filter(item => item.id !== id));
    dispatch(removeContactAction(id));
  };

  const applyFilter = () => {
    if (contactsFilter) {
      const normalizedFilter = contactsFilter.toLowerCase();
      const visivleContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
      return visivleContact;
    }
    return contacts;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <Box
        p={30}
        bg="secondary"
        border="2px solid"
        borderColor="border"
        borderRadius={8}
      >
        <ContactFormTitle>PhoneBook</ContactFormTitle>
        <ContactForm onHandleSubmit={handleSubmit} />
        <ContactFilter value={contactsFilter} onChange={changeFilter} />
        {contacts.length > 0 && <ContactFormTitle>Contacts</ContactFormTitle>}
        {contacts.length > 0 && (
          <ContactList contacts={applyFilter()} onRemoveBtn={onRemoveBtn} />
        )}
      </Box>
    </div>
  );
}
