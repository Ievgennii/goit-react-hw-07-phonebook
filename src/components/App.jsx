
import  ContactList  from './ContactList';
import  Filter  from './Filter';
import ContactForm  from './ContactForm';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import css from './Contacts.module.css';


const App = () => {
  const filter = useSelector(getFilter);//используется для получения значения filter из Redux store, используя селектор getFilter. Здесь мы получаем значение фильтра из состояния Redux.
  const contacts = useSelector(getContacts);//используется для получения значения contacts из Redux store, используя селектор getContacts. Здесь мы получаем массив контактов из состояния Redux

// Функция getVisibleContacts фильтрует контакты на основе значения filter
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();//В список контактов передается visibleContacts, чтобы отобразить только отфильтрованные контакты.

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm  />
      <h1>Contacts</h1>
      <Filter  />
      <ContactList  contacts={visibleContacts}/>
    </div>
  );
};

export default App;


