import { NavLink } from "react-router-dom";

import { AiOutlineUserSwitch } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import {BiHomeSmile} from "react-icons/bi";
const AdminMenu = () => {
  return (
    <>
      
      <NavLink
        to="/dashboard/add-users"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <AiOutlineUserSwitch className="w-6 h-6" />

        <span className="mx-4 font-medium">Manage Users</span>
      </NavLink>
      <NavLink
        to="/dashboard/manage-classes"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
       <SiGoogleclassroom className="w-5 h-5" />

       <span className="mx-4 font-medium">Manage Classes</span>
      </NavLink>

     
    </>
  );
};

export default AdminMenu;
