import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../ContactsSlice";

export default function AddNewContact({ close }: any) {
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    status: "Active", // Default status is set to Active
  });

  // Handler to update form data state on input change
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler to dispatch addContact action and close the modal
  const handleSubmit = () => {
    dispatch(addContact(formData));
    close();
  };

  // Function to check if the form is valid
  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white bg-opacity-80 flex justify-center items-center z-10 shadow-md">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-[#eaf2fa] rounded p-4 border border-gray">
        <div className="text-lg font-semibold">Add New Contact</div>
        <div className="font-light text-[12px]">
          Note: * Represents all fields are required fields
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <div>First Name *</div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray rounded p-2 mt-2 w-full"
                required
              />
            </div>
            <div className="flex-1">
              <div>Last Name *</div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 mt-2 w-full"
                required
              />
            </div>
          </div>

          <div>
            <div>Email *</div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray rounded p-2 mt-2 w-full"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <div>Phone Number *</div>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border border-gray rounded p-2 mt-2 w-full"
                required
              />
            </div>
          </div>

          <div>
            <div>Role *</div>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border border-gray rounded p-2 mt-2 w-full"
              required
            />
          </div>

          <div>
            <div>Status *</div>
            <label className="flex items-center mt-2">
              <input
                type="radio"
                name="status"
                value="Active"
                checked={formData.status === "Active"}
                onChange={handleChange}
              />{" "}
              <span className="ml-2">Active</span>
            </label>
            <label className="flex items-center mt-2">
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={formData.status === "Inactive"}
                onChange={handleChange}
              />{" "}
              <span className="ml-2">Inactive</span>
            </label>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className={`px-4 py-2 rounded active:scale-90 hover:bg-opacity-80 ${
                isFormValid()
                  ? "bg-[#4987EE] text-white"
                  : "bg-[#4987EE] text-white cursor-not-allowed bg-opacity-75"
              }`}
              onClick={handleSubmit}
              disabled={!isFormValid()}
            >
              {isFormValid() ? "Save" : "Save"}
              {!isFormValid() && <span className="ml-2"></span>}
            </button>

            <button
              className="px-4 py-2 border border-gray rounded ml-4 active:scale-90 hover:bg-opacity-30"
              onClick={close}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
