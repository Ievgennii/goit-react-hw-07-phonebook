import React from 'react';
import css from './Contacts.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk, addContactsThunk } from 'redux/contactsThunk';
import { selectGetContacts } from 'redux/selectors';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();//Хук useDispatch используется для получения функции dispatch из Redux для отправки actions в store.
  const [name, setName] = useState('');//Хук useState используется для создания состояния name, которое инициализируется пустой строкой, и функции setName для обновления значения name.
  const [number, setNumber] = useState('');

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleSubmit = e => {
    const contact = {
      name: name,
      phone: number,
    };
    e.preventDefault();
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      Notiflix.Notify.info(`${name} is already in contacts`);
    } else {
      dispatch(addContactsThunk(contact));
    }
    reset();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const contacts = useSelector(selectGetContacts);//Хук useSelector используется для получения значения contacts из Redux store с помощью селектора getContacts.

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      
        <p>Name</p>
        <input
          className={css.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <p>Number</p>
        <input
          className={css.input}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit"
        className={css.button}
        disabled={!name || !number}>
          Add contact
        </button>
      
    </form>
  );
};

export default ContactForm;


