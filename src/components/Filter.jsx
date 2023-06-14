import React from 'react';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/sliceFilter';
import { getFilter } from 'redux/selectors';

function Filter() {
  const filter = useSelector(getFilter);//Хук useSelector используется для получения значения filter из Redux store с помощью селектора getFilter.
  const dispatch = useDispatch();//Хук useDispatch используется для получения функции dispatch из Redux для отправки actions в store.
  return (
    <div className={css.filter}>
      <label>
        Find contacts by name
        <br />
        <input // Поле ввода связано с состоянием filter и вызывает функцию dispatch с action setFilter, чтобы обновить значение фильтра при изменении поля ввода
          className={css.input}
          type="text"
          value={filter}
          onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
        />
      </label>
    </div>
  );
}

export default Filter;
