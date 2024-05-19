import { useState } from "react";
import { connect } from "react-redux";
import AddNewContact from "./AddNewContact";
import { addContact } from "../../ContactsSlice";


const Contact = ({ contacts, addContact }: any) => {
  const [addNew, setAddNew] = useState(false);
 

  const openAddNew = () => {
    setAddNew(true);
  };

  const closeAddNew = () => {
    setAddNew(false);
  };

  return (
    <>
      <div className="p-4 md:pl-64">
        <div className="w-full">
          <div className="text-[28px] mt-6">Contacts</div>
        </div>

        <div className="mt-20 md:flex gap-4 flex-wrap justify-center">
          {contacts.map((contact: any) => (
            <div key={contact.id} className="w-full md:w-[300px] mb-6 md:mb-0">
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
                  <div>{contact.phoneNumber}</div>
                </div>
                <div className="flex justify-center gap-x-2">
                  <button className="px-4 py-2  rounded-[9px] text-[15px] text-white bg-[#4987EE] active:scale-90 hover:bg-opacity-80">
                    Edit
                  </button>

                  <button className="px-4 py-2 text-white rounded-[9px] text-[15px] bg-Red active:scale-90 hover:bg-opacity-80">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 p-3 mt-6">
        <button
          className="px-4 py-2 text-white rounded-[9px] text-[15px] bg-[#4987EE] active:scale-90 hover:bg-opacity-80"
          onClick={openAddNew}
        >
          + Add New
        </button>
      </div>

      {addNew && <AddNewContact close={closeAddNew} addContact={addContact} />}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  contacts: state.contacts.contacts,
});

const mapDispatchToProps = (dispatch: any) => ({
  addContact: (contact: any) => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
