import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './ContactsSlice'

const store = configureStore({
  reducer: {
    contacts: contactsReducer, 
  },
});

export default store;
