import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const onPending = state => {
  state.isLoading = true;
};

const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },  
    extraReducers: {
        [fetchContacts.pending]: onPending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        },
        [fetchContacts.rejected]: onRejected,

        [addContact.pending]: onPending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts.push(action.payload);
        },
        [addContact.rejected]: onRejected,

        [deleteContact.pending]: onPending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
        },
        [deleteContact.rejected]: onRejected,
    },
});

export const contactReducer = contactsSlice.reducer;


 