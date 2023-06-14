import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter', // Название slice, будет использовано в генерации actions и reducer'а
  initialState: '', // Начальное состояние фильтра
  reducers: {
    setFilter(state, action) {
      return (state = action.payload); // Установка значения фильтра из payload action'а
    },
    // filter(state, action) {},
  },
});

export const { setFilter, filter } = sliceFilter.actions; // Экспорт сгенерированных actions


// Этот код использует функцию createSlice из Redux Toolkit для создания slice (части состояния) с названием "filter". 
// Slice содержит начальное состояние initialState, которое представляет собой пустую строку.
// reducers объект содержит определения для двух actions: setFilter и filter.
// setFilter action устанавливает значение фильтра в состоянии. Он принимает значение из action.payload и 
// присваивает его переменной state, обновляя значение фильтра.
// sliceFilter.actions экспортирует сгенерированные actions setFilter и filter, 
// которые могут быть использованы для диспетчеризации и обновления состояния фильтра в Redux store.