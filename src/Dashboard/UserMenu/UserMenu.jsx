import { NavLink } from "react-router-dom";

import { AiFillFileAdd, AiOutlineSelect } from "react-icons/ai";


import { MdOutlinePayment} from "react-icons/md";
const UserMenu = () => {
  return (
    <>
     
      <NavLink
        to="/dashboard/my-bookings"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? " text-gray-500 underline " : "text-neutral-500"
          }`
        }
      >
        <AiFillFileAdd className="w-6 h-6" />

        <span className="mx-4 font-medium text-gray-500">My Selected Class</span>
      </NavLink>
      <NavLink
        to="/dashboard/enrolled-classes"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? " text-gray-500 underline " : "text-neutral-500"
          }`
        }
      >
        <AiOutlineSelect className="w-6 h-6" />

        <span className="mx-4 font-medium text-gray-500">My Enrolled Class</span>
      </NavLink>
      <NavLink
        to="/dashboard/payment-classes"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? " text-gray-500 underline " : "text-neutral-500"
          }`
        }
      >
        <MdOutlinePayment className="w-6 h-6" />

        <span className="mx-4 font-medium text-gray-500">Payment History</span>
      </NavLink>
    </>
  );
};

export default UserMenu;
