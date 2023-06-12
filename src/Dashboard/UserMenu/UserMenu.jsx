import { NavLink } from "react-router-dom";

import { AiFillFileAdd } from "react-icons/ai";

import { BiHomeSmile } from "react-icons/bi";
const UserMenu = () => {
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

        <span className="mx-4 font-medium">User Home</span>
      </NavLink>
      <NavLink
        to="/dashboard/my-bookings"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <AiFillFileAdd className="w-6 h-6" />

        <span className="mx-4 font-medium">My Selected Class</span>
      </NavLink>
      <NavLink
        to="/dashboard/enrolled-classes"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <AiFillFileAdd className="w-6 h-6" />

        <span className="mx-4 font-medium">My Enrolled Class</span>
      </NavLink>
      <NavLink
        to="/dashboard/payment-classes"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <AiFillFileAdd className="w-6 h-6" />

        <span className="mx-4 font-medium">Payment History</span>
      </NavLink>
    </>
  );
};

export default UserMenu;
