import { configureStore } from '@reduxjs/toolkit'; // Импортируем функцию configureStore из пакета @reduxjs/toolkit для создания хранилища Redux

import { sliceContact } from './sliceContact'; // Импортируем срез (slice) sliceContact из файла './sliceContact'
import { sliceFilter } from './sliceFilter'; // Импортируем срез (slice) sliceFilter из файла './sliceFilter'

export const store = configureStore({
  // Создаем хранилище Redux с помощью функции configureStore
  reducer: {
    contacts: sliceContact.reducer, // Устанавливаем срез sliceContact как редьюсер для состояния контактов в хранилище
    filter: sliceFilter.reducer, // Устанавливаем срез sliceFilter как редьюсер для состояния фильтра в хранилище
  },
});
