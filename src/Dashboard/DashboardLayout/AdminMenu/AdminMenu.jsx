import { NavLink } from "react-router-dom";

import { AiOutlineUserSwitch } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
const AdminMenu = () => {
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
        <AiOutlineUserSwitch className="w-6 h-6" />

        <span className="mx-4 font-medium">Manage Users</span>
      </NavLink>

      <div className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer">
        <SiGoogleclassroom className="w-5 h-5" />

        <span className="mx-4 font-medium">Manage Classes</span>
      </div>
    </>
  );
};

export default AdminMenu;
