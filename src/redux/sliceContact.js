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

export const { add, remove } = sliceContact.actions; // Экспорт сгенерированных actions
