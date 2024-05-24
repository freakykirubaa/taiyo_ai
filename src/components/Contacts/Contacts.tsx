import { useState } from "react";
import { connect } from "react-redux";
import AddNewContact from "./AddNewContact";
import { addContact, editContact, deleteContact } from "../../ContactsSlice";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";

const Contact = ({ contacts, addContact, deleteContact }: any) => {
  const [addNew, setAddNew] = useState(false); // State for adding a new contact modal
  const [editNew, setEditNew] = useState(false); // State for editing a contact modal
  const [deleteNew, setDeleteNew] = useState(false); // State for deleting a contact modal
  const [selectedContact, setSelectedContact] = useState<any>(null); // State for the selected contact

  // Function to open add new contact modal
  const openAddNew = () => {
    setAddNew(true);
  };

  // Function to close add new contact modal
  const closeAddNew = () => {
    setAddNew(false);
  };

  // Function to open edit contact modal
  const openEdit = (contact: any) => {
    setEditNew(true);
    setSelectedContact(contact);
  };

  // Function to close edit contact modal
  const closeEdit = () => {
    setEditNew(false);
    setSelectedContact(null);
  };

  // Function to close delete contact modal
  const closeDelete = () => {
    setDeleteNew(false);
  };

  return (
    <>
      <div className="p-4 md:pl-64">
        <div className="w-full">
          <div className="text-[28px] mt-6">Contacts</div>
        </div>

        <div className="mt-20 md:flex gap-4 flex-wrap justify-center">
          {contacts.length === 0 ? (
            <div className="flex justify-center items-center">
              No contacts found.
              <br />
              Add New Contact
            </div>
          ) : (
            // Map through contacts to display each contact
            contacts.map((contact: any, index: any) => (
              <div key={index} className="w-full md:w-[300px] mb-6 md:mb-0">
                <div className="bg-white shadow-md rounded-md p-4">
                  <div className="flex justify-center w-full">
                    <div>
                      <img
                        src="https://cdn-icons-png.freepik.com/512/7718/7718888.png"
                        className="w-20 h-20"
                        alt={contact.name}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mt-2 text-center">
                      {contact.firstName} {contact.lastName}
                    </div>
                    <div>{contact.role}</div>
                    <div>{contact.status}</div>
                  </div>
                  <div className="mt-6">
                    <div>{contact.email}</div>
                    <div>
                      +91
                      {contact.phoneNumber}
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-2 relative">
                    {/* Button to open edit contact modal */}
                    <button
                      className="px-4 py-2 rounded-[9px] text-[15px] text-white bg-[#4987EE] active:scale-90 hover:bg-opacity-80"
                      onClick={() => openEdit(contact)}
                    >
                      Edit
                    </button>

                    {/* Button to open delete contact modal */}
                    <button
                      className="px-4 py-2 text-white rounded-[9px] text-[15px] bg-Red active:scale-90 hover:bg-opacity-80 "
                      onClick={() => {
                        setSelectedContact(contact);
                        setDeleteNew(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Button to open add new contact modal */}
      <div className="absolute right-0 p-3 mt-6">
        <button
          className="px-4 py-2 text-white rounded-[9px] text-[15px] bg-[#4987EE] active:scale-90 hover:bg-opacity-80"
          onClick={openAddNew}
        >
          + Add New
        </button>
      </div>
      {/* Render add new contact modal */}
      {addNew && <AddNewContact close={closeAddNew} addContact={addContact} />}
      {/* Render edit contact modal */}
      {editNew && <EditContact close={closeEdit} contact={selectedContact} />}
      {/* Render delete contact modal */}
      {deleteNew && (
        <DeleteContact
          close={closeDelete}
          contact={selectedContact}
          deleteContact={deleteContact}
        />
      )}
    </>
  );
};

// Map state to props to get the contacts from the redux store
const mapStateToProps = (state: any) => ({
  contacts: state.contacts.contacts.filter((contact: any) => contact !== null),
});

// Map dispatch to props to dispatch actions to the redux store
const mapDispatchToProps = (dispatch: any) => ({
  addContact: (contact: any) => dispatch(addContact(contact)),
  editContact: (contact: any) => dispatch(editContact(contact)),
  deleteContact: (email: string) => dispatch(deleteContact(email)),
});

// Connect the component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
