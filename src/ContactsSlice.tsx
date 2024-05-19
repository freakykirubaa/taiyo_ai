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
  
  },
});

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
