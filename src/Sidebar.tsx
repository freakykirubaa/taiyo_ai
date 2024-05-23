import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed h-full top-0 left-0 w-64 flex-shrink-0"> 

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

      <div
        className={`absolute md:relative top-0 left-0 z-50 w-60 h-full  text-white transition-transform duration-300 transform  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
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
        <nav className="h-screen bg-[#edf5fd] shadow-lg p-4">
          <ul>
            <div className="text-black">DashBoard</div>
            <li className="mt-4">
              <Link
                to="/"
                className={`block px-4 py-2  ${
                  location.pathname === "/"
                    ? "bg-[#4987EE] text-white rounded-[6px]"
                    : "text-black"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/charts-and-maps"
                className={`block px-4 py-2  ${
                  location.pathname === "/charts-and-maps"
                    ? "bg-[#4987EE] text-white rounded-[6px]"
                    : "text-black"
                }`}
              >
                Charts and Maps
              </Link>
            </li>
          </ul>
        </nav>
      </div>

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
