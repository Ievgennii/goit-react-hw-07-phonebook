import React from 'react';
import css from './Contacts.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/sliceContact';
import { getContacts } from 'redux/selectors';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();//Хук useDispatch используется для получения функции dispatch из Redux для отправки actions в store.
  const [name, setName] = useState('');//Хук useState используется для создания состояния name, которое инициализируется пустой строкой, и функции setName для обновления значения name.
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      Notiflix.Notify.info(`${name} is already in contacts`);
    } else {
      dispatch(add({ name, number }));
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
  const contacts = useSelector(getContacts);//Хук useSelector используется для получения значения contacts из Redux store с помощью селектора getContacts.

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


//Функция handleSubmit вызывается при отправке формы. Она предотвращает стандартное поведение формы, 
// проверяет, есть ли контакт с таким же именем в массиве контактов (contacts), и если нет, то отправляет 
// action add с именем и номером контакта через dispatch. Затем вызывается функция reset, 
// которая сбрасывает значения name и number.

// Функция handleChange вызывается при изменении значений полей формы. Она обновляет соответствующие 
// состояния name или number на основе ввода пользователя

// Функция reset сбрасывает значения name и number в пустые строки.

