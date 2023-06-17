// Импортируем необходимые зависимости
import { useEffect } from 'react';
import ContactList from './ContactList'; // Импортируем компонент ContactList
import Filter from './Filter'; // Импортируем компонент Filter
import ContactForm from './ContactForm'; // Импортируем компонент ContactForm
import { useSelector, useDispatch } from 'react-redux'; // Импортируем функции useSelector и useDispatch из react-redux для работы с Redux
import {
  selectGetContacts, // Импортируем селектор selectGetContacts для получения списка контактов из Redux
  selectGetFilter, // Импортируем селектор selectGetFilter для получения фильтра из Redux
  selectIsLoading, // Импортируем селектор selectIsLoading для получения состояния загрузки из Redux
  selectError // Импортируем селектор selectError для получения ошибки из Redux
} from 'redux/selectors'; // Импортируем селекторы из папки redux/selectors
import { getContactsThunk } from 'redux/contactsThunk'; // Импортируем функцию getContactsThunk для асинхронного получения контактов из Redux
import css from './Contacts.module.css'; // Импортируем CSS-модуль для стилизации компонента

const App = () => {
  // Используем хуки useSelector и useDispatch для получения данных из Redux и диспетчера действий
  const filter = useSelector(selectGetFilter); // Получаем текущее значение фильтра из Redux
  const contacts = useSelector(selectGetContacts); // Получаем список контактов из Redux
  const isLoading = useSelector(selectIsLoading); // Получаем состояние загрузки из Redux
  const error = useSelector(selectError); // Получаем ошибку из Redux
  const dispatch = useDispatch(); // Получаем диспетчер действий из Redux

  useEffect(() => {
    // Используем хук useEffect для выполнения побочных эффектов при изменении зависимостей
    dispatch(getContactsThunk()); // Вызываем функцию getContactsThunk для получения контактов
  }, [dispatch]); // Передаем dispatch в качестве зависимости, чтобы хук следил за ее изменениями

  // Функция для фильтрации контактов по значению фильтра
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase(); // Приводим фильтр к нижнему регистру
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    ); // Фильтруем контакты на основе имени, содержащего значение фильтра
  };

  const visibleContacts = getVisibleContacts(); // Получаем отфильтрованные контакты

  return (
    // Рендеринг компонента App
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>} 
      <ContactList contacts={visibleContacts} /> 
    </div>
  );
};

export default App; // Экспортируем компонент App по умолчанию для использования в других модулях



