import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  delContactsThunk,
  getContactsThunk,
} from './contactsThunk';

import { handlePending, handleReject } from './selectors';



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
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.rejected, handleReject)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null
      })
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.rejected, handleReject)
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
        state.isLoading = false;
        state.error = null
      })
      .addCase(delContactsThunk.pending, handlePending)
      .addCase(delContactsThunk.rejected, handleReject)
      .addCase(delContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        state.isLoading = false;
        state.error = null
      });
  },
});

export const { addContactsActions, delContactsActions } = sliceContact.actions;
export const contactsReducer = sliceContact.reducer;

export const { add, remove } = sliceContact.actions; // Экспорт сгенерированных actions
