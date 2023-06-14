import React from 'react';
import css from './Contacts.module.css';
import { useDispatch } from "react-redux";
import { remove } from 'redux/sliceContact';

function ContactList({ contacts }) {
  
  const dispatch = useDispatch();// Хук useDispatch используется для получения функции dispatch из Redux для отправки actions в store
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.list} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={css.button}
            onClick={() => {
              dispatch(remove(id));// при нажатии вызывает функцию dispatch с action remove(id), где id - это идентификатор контакта.
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}



export default ContactList;
