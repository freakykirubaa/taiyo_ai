import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //@ts-ignore
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    editContact(state, action) {
      const { email, updatedContact } = action.payload;

      if (email && updatedContact) {
        const index = state.contacts.findIndex(
          (contact: any) => contact.email === email
        );
        if (index !== -1) {
          state.contacts[index] = updatedContact;
          localStorage.setItem("contacts", JSON.stringify(state.contacts));
        }
      }
    },
    deleteContact(state, action) {
      const emailToDelete = action.payload;
      state.contacts = state.contacts.filter(
        (contact: any) => contact.email !== emailToDelete
      );
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
  },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
