import { createSlice, nanoid } from '@reduxjs/toolkit';

export const sliceContact = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      {
        createdAt: '2023-04-05T23:25:30.677Z',
        name: 'Dolores Morar',
        phone: '(570) 817-2230',
        id: '29',
      },
    ],
    isLoading: false,
    error: null,
  },
  reducers: {
    add(state, action) {
      state.push({
        // Добавление нового контакта в состояние
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },

    remove(state, action) {
      return state.filter(item => item.id !== action.payload); // Удаление контакта из состояния
    },
  },
});

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
