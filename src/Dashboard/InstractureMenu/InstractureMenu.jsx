import { NavLink } from "react-router-dom";

import { AiFillFileAdd } from "react-icons/ai";

import {BiHomeSmile} from "react-icons/bi";
const InstractureMenu = () => {
  return (
    <>
      <NavLink
        to="my-bookings"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <BiHomeSmile className="w-6 h-6" />

        <span className="mx-4 font-medium">Instracture Home</span>
      </NavLink>
      <NavLink
        to="/dashboard/add-form"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? " text-yellow-500 " : "text-neutral-100"
          }`
        }
      >
        <AiFillFileAdd className="w-6 h-6" />

        <span className="mx-4 font-medium text-neutral-100 text-xl font-mono">Add a Class</span>
      </NavLink>
      <NavLink
        to="/dashboard/my-classes"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "  text-yellow-500" : "text-gray-600"
          }`
        }
      >
        <AiFillFileAdd className="w-6 h-6" />

        <span className="mx-4 font-medium">My Classes</span>
      </NavLink>

     
    </>
  );
};

export default InstractureMenu;
