import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./common/common";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the sidebar open/close state
  const location = useLocation(); // Hook to get the current location

  // Function to toggle the sidebar open/close state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed h-full top-0 left-0 w-64 flex-shrink-0">
      {/* Button to open the sidebar, visible on small screens */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className={`z-50 top-5 left-5 p-4 ${isOpen ? "hidden" : "block"}`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Sidebar navigation */}
      <div
        className={`absolute md:relative top-0 left-0 z-50 w-60 h-full  text-white transition-transform duration-300 transform  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Button to close the sidebar, visible on small screens */}
        <button
          onClick={toggleSidebar}
          className={`absolute top-5 right-5 md:hidden p-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <svg
            className="w-6 h-6 text-black p-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Navigation links */}
        <nav className="h-screen bg-[#edf5fd] shadow-lg p-4">
          <ul>
            <Link to="/">
              <div className="text-black">Taiyo DashBoard</div>
            </Link>
            {/* Map through menuItems to create navigation links */}
            {menuItems.map((item) => (
              <li key={item.path} className="mt-4">
                <Link
                  to={item.path}
                  className={`block px-4 py-2 ${
                    location.pathname === item.path
                      ? "bg-[#4987EE] text-white rounded-[6px]"
                      : "text-black"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay to close the sidebar when clicked outside, visible on small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
