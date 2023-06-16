export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;
export const handlePending = state => {
  state.isLoading = true;
};

export const handleReject = (state, { payload }) => {
  state.error = payload;
};

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;