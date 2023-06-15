import {  configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';

import { sliceContact } from './sliceContact';
import { sliceFilter } from './sliceFilter';

export const store = configureStore({  
    reducer: {
      contacts: sliceContact.reducer,
  filter: sliceFilter.reducer,
    }  
});