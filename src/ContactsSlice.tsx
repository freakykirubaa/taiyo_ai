import { createSlice } from "@reduxjs/toolkit";

// Initial state with contacts loaded from localStorage, defaulting to an empty array if none are found
const initialState = {
  //@ts-ignore
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

// Create a slice for contacts with actions and reducers
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // Reducer to add a new contact
    addContact(state, action) {
      state.contacts.push(action.payload); // Add the new contact to the state
      localStorage.setItem("contacts", JSON.stringify(state.contacts)); // Update localStorage
    },
    // Reducer to edit an existing contact
    editContact(state, action) {
      const { email, updatedContact } = action.payload; // Destructure the payload

      if (email && updatedContact) {
        const index = state.contacts.findIndex(
          (contact: any) => contact.email === email // Find the index of the contact to be updated
        );
        if (index !== -1) {
          state.contacts[index] = updatedContact; // Update the contact in the state
          localStorage.setItem("contacts", JSON.stringify(state.contacts)); // Update localStorage
        }
      }
    },
    // Reducer to delete a contact
    deleteContact(state, action) {
      const emailToDelete = action.payload; // Get the email of the contact to be deleted
      state.contacts = state.contacts.filter(
        (contact: any) => contact.email !== emailToDelete // Filter out the contact to be deleted
      );
      localStorage.setItem("contacts", JSON.stringify(state.contacts)); // Update localStorage
    },
  },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;

// Export the reducer to be included in the store
export default contactsSlice.reducer;
