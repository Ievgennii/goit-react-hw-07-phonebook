import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  delContactsThunk,
  getContactsThunk,
} from './contactsThunk';
import { slectHandlePending, selectHandleReject } from './selectors';

export const sliceContact = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      {
        name: '',
        phone: '',
        id: '',
      },
    ],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, slectHandlePending)
      .addCase(getContactsThunk.rejected, selectHandleReject)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null
      })
      .addCase(addContactsThunk.pending, slectHandlePending)
      .addCase(addContactsThunk.rejected, selectHandleReject)
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
        state.isLoading = false;
        state.error = null
      })
      .addCase(delContactsThunk.pending, slectHandlePending)
      .addCase(delContactsThunk.rejected, selectHandleReject)
      .addCase(delContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        state.isLoading = false;
        state.error = null
      });
  },
});

export const { addContactsActions, delContactsActions } = sliceContact.actions;
export const contactsReducer = sliceContact.reducer;

export const { add, remove } = sliceContact.actions; 


// Комментарии по коду:
// createSlice - функция из @reduxjs/toolkit, которая упрощает создание среза (slice) хранилища Redux. Она позволяет определить имя среза, начальное состояние и редукторы для обработки экшнов.
// sliceContact - созданный срез хранилища Redux, содержащий информацию о контактах. Он будет иметь имя 'contacts' и начальное состояние с полем items, isLoading и error.
// extraReducers - объект, содержащий определения редукторов для обработки экшнов, связанных с асинхронными операциями получения, добавления и удаления контактов.
// .addCase - метод extraReducers, используемый для определения редукторов для конкретных случаев (cases). Он принимает экшн и функцию-обработчик.
// getContactsThunk.pending - экшн, представляющий статус ожидания (pending) для операции получения контактов.
// getContactsThunk.rejected - экшн, представляющий статус отклонения (rejected) для операции получения контактов.
// getContactsThunk.fulfilled - экшн, представляющий статус выполнения (fulfilled) для операции получения контактов.
// addContactsThunk.pending - экшн, представляющий статус ожидания (pending) для операции добавления контакта.
// addContactsThunk.rejected - экшн, представляющий статус отклонения (rejected) для операции добавления контакта.
// addContactsThunk.fulfilled - экшн, представляющий статус выполнения (fulfilled) для операции добавления контакта.
// delContactsThunk.pending - экшн, представляющий статус ожидания (pending) для операции удаления контакта.
// delContactsThunk.rejected - экшн, представляющий статус отклонения (rejected) для операции удаления контакта.
// delContactsThunk.fulfilled - экшн, представляющий статус выполнения (fulfilled) для операции удаления контакта.
// Функции-обработчики, переданные в метод addCase, обновляют состояние хранилища на основе полученных данных и статусов выполнения операций. Они изменяют значения полей items, isLoading и error в состоянии хранилища.
// addContactsActions - экшн-константа, представляющая операцию добавления контакта.
// delContactsActions - экшн-константа, представляющая операцию удаления контакта.
// contactsReducer - редуктор, созданный на основе среза sliceContact, который будет использоваться в конфигурации хранилища Redux.
// add и remove - экшны, созданные на основе среза sliceContact, представляющие операции добавления и удаления контактов соответственно.