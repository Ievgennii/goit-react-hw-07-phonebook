
import { useEffect } from 'react';
import  ContactList  from './ContactList';
import  Filter  from './Filter';
import ContactForm  from './ContactForm';
import { useSelector, useDispatch } from 'react-redux';
import { selectGetContacts, selectGetFilter, selectIsLoading, selectError } from 'redux/selectors';
import { getContactsThunk } from 'redux/contactsThunk';
import css from './Contacts.module.css';


const App = () => {
  const filter = useSelector(selectGetFilter);//используется для получения значения filter из Redux store, используя селектор getFilter. Здесь мы получаем значение фильтра из состояния Redux.
  const contacts = useSelector(selectGetContacts);//используется для получения значения contacts из Redux store, используя селектор getContacts. Здесь мы получаем массив контактов из состояния Redux
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  
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
    {isLoading && !error && <b>Request in progress...</b>}
    <ContactList  contacts={visibleContacts}/>
  </div>
);
};

export default App;


