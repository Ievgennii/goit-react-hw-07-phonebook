import { createAsyncThunk } from '@reduxjs/toolkit'; // Импортируем функцию createAsyncThunk из пакета @reduxjs/toolkit
import { addContacts, delContacts, fetchContacts } from 'redux/operations'; // Импортируем функции addContacts, delContacts и getContacts из файла 'redux/operations'

export const getContactsThunk = createAsyncThunk(
  // Создаем асинхронное Thunk-действие с помощью функции createAsyncThunk
  'contacts/fetchAll', // Указываем строку действия (action) для получения всех контактов
  async (_, { reject }) => {
    try {
      const data = fetchContacts(); // Вызываем функцию fetchContacts для получения контактов
      return data; // Возвращаем полученные данные в качестве результата Thunk-действия
    } catch (error) {
      return reject(error.message); // В случае ошибки, вызываем reject с сообщением об ошибке
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  // Создаем асинхронное Thunk-действие для добавления контакта
  'contacts/addContact', // Указываем строку действия (action) для добавления контакта
  async (contact, { reject }) => {
    try {
      const data = addContacts(contact); // Вызываем функцию addContacts для добавления контакта
      return data; // Возвращаем полученные данные в качестве результата Thunk-действия
    } catch (error) {
      return reject(error.message); // В случае ошибки, вызываем reject с сообщением об ошибке
    }
  }
);

export const delContactsThunk = createAsyncThunk(
  // Создаем асинхронное Thunk-действие для удаления контакта
  'contacts/deleteContact', // Указываем строку действия (action) для удаления контакта
  async (id, { reject }) => {
    try {
      const data = delContacts(id); // Вызываем функцию delContacts для удаления контакта
      return data; // Возвращаем полученные данные в качестве результата Thunk-действия
    } catch (error) {
      return reject(error.message); // В случае ошибки, вызываем reject с сообщением об ошибке
    }
  }
);


// Здесь мы используем функцию createAsyncThunk из пакета @reduxjs/toolkit для создания асинхронных Thunk-действий.
// getContactsThunk - Thunk-действие для получения всех контактов. Оно вызывает функцию getContacts и возвращает полученные данные или отклоняет с ошибкой.
// addContactsThunk - Thunk-действие для добавления контакта. Оно вызывает функцию addContacts с переданным контактом и возвращает полученные данные или отклоняет с ошибкой.
// delContactsThunk - Thunk-действие для удаления контакта. Оно вызывает функцию delContacts с переданным идентификатором контакта и возвращает полученные данные или отклоняет с ошибкой.
// Эти Thunk-действия позволяют выполнять асинхронные операции в Redux, взаимодействуя с внешними источниками данных, и обрабатывать успешные и ошибочные сценарии.