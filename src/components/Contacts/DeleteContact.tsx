import { useDispatch } from "react-redux";
import { deleteContact } from "../../ContactsSlice";

export default function DeleteContact({ close, contact }: any) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.email)); // Assuming contact has an email property
    close();
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-white bg-opacity-80 flex justify-center items-center z-10 shadow-md">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-[#eaf2fa] rounded p-4 border border-gray">
          <div className="text-center">Delete Contact</div>

          <div className="border-b border-gray" />

          <div className="mt-4 text-center text-[18px]">
            Are you sure want to delete this contact?
          </div>

          <div className="mt-4 flex justify-center gap-x-2">
            <button
              className="px-3 py-1.5 bg-Red text-white rounded active:scale-90 hover:bg-opacity-80"
              onClick={handleDelete}
            >
              Delete
            </button>

            <button
              className="px-3 py-1.5 border border-gray rounded active:scale-90 hover:bg-opacity-80"
              onClick={close}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
