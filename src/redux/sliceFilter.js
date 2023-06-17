import { createSlice } from '@reduxjs/toolkit';



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


//Создается срез хранилища Redux с именем 'filter'. Начальное состояние этого среза задается пустой строкой ''.
// В срезе определен один редуктор с названием setFilter, который принимает предыдущее состояние и экшн с 
//полем payload в качестве аргументов. Внутри редуктора возвращается новое состояние, равное значению поля payload

//Из среза sliceFilter экспортируются экшны с именем setFilter и редуктор с именем filterReducer. 
//Это позволяет использовать экшн setFilter и редуктор filterReducer в других частях приложения для обновления 
//и получения значения фильтра из хранилища