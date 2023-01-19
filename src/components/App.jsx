import { useSelector } from 'react-redux';
import { Box } from 'components/Box/Box';
import ContactForm from './ContactForm/ContactForm';
import { ContactFormTitle } from './ContactFormTitle/ContactFormTitle';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { getContacts } from 'redux/selectors';

export default function PhoneBoock() {
  const contacts = useSelector(getContacts);

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
        <ContactForm />
        <ContactFilter />
        {contacts.length > 0 && <ContactFormTitle>Contacts</ContactFormTitle>}
        {contacts.length > 0 && <ContactList />}
      </Box>
    </div>
  );
}
