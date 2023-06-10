import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from 'store/auth/operations';

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
    extraReducers: 
        builder => 
            builder
                .addCase(fetchContacts.pending, onPending)
                .addCase(fetchContacts.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                    state.contacts = action.payload;
                })
                .addCase(fetchContacts.rejected, onRejected)
                .addCase(addContact.pending, onPending)
                .addCase(addContact.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                    state.contacts.push(action.payload);
                })
                .addCase(addContact.rejected, onRejected)
                .addCase(deleteContact.pending, onPending)
                .addCase(deleteContact.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                    state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
                })
                .addCase(deleteContact.rejected, onRejected)
                .addCase(logOut.fulfilled, (state, action) => {
                    state.contacts = [];
                    state.error = null;
                    state.isLoading = false;
                })
});

export const contactReducer = contactsSlice.reducer;


 