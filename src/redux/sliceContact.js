import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  delContactsThunk,
  getContactsThunk,
} from './contactsThunk';

const handlePaending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.error = payload;
};

export const sliceContact = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      {
        name: "Ricardo Shanahan",
  phone: "681.448.7430 x252",
  id: "1"
      },
    ],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePaending)
      .addCase(getContactsThunk.rejected, handleReject)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactsThunk.pending, handlePaending)
      .addCase(addContactsThunk.rejected, handleReject)
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
      })
      .addCase(delContactsThunk.pending, handlePaending)
      .addCase(delContactsThunk.rejected, handleReject)
      .addCase(delContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      });
  },
});

export const { addContactsActions, delContactsActions } = sliceContact.actions;
export const contactsReducer = sliceContact.reducer;

export const { add, remove } = sliceContact.actions; // Экспорт сгенерированных actions

// Этот код использует функцию createSlice из Redux Toolkit для создания slice (части состояния) с названием "contacts".
// Slice содержит начальное состояние initialState, которое представляет собой массив объектов контактов.
// reducers объект содержит определения для двух actions: add и remove.
// add action добавляет новый контакт в состояние. Он получает name и number из action.payload и
// добавляет новый объект контакта с уникальным id с помощью функции nanoid().
// remove action удаляет контакт из состояния. Он использует action.payload (идентификатор контакта) для фильтрации
// состояния и возвращает новый массив контактов, исключая удаляемый контакт.
// sliceContact.actions экспортирует сгенерированные actions add и remove, которые могут быть использованы
// для диспетчеризации и обновления состояния контактов в Redux store
