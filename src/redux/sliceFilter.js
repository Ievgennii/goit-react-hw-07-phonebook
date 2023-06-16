import { createSlice } from '@reduxjs/toolkit';

// export const sliceFilter = createSlice({
//   name: 'filter', // Название slice, будет использовано в генерации actions и reducer'а
//   initialState: '', // Начальное состояние фильтра
//   reducers: {
//     filterContact(_, { payload }) {
//       return payload;
//     },
//   },
// });

// export const { setFilter, filter } = sliceFilter.actions; // Экспорт сгенерированных actions


// import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { setFilter } = sliceFilter.actions;
export const filterReducer = sliceFilter.reducer;