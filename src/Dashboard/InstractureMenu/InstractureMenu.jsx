import { NavLink } from "react-router-dom";

import { AiFillFileAdd } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { TbBrandGoogleHome} from "react-icons/tb";
import { CgProfile} from "react-icons/cg";

const InstractureMenu = () => {
  return (
    <>
      <NavLink
        to="/dashboard/add-form"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? " text-gray-500 underline " : "text-neutral-500"
          }`
        }
      >
        <AiFillFileAdd className="w-6 h-6" />

        <span className="mx-4 font-medium text-gray-500">Add a Class</span>
      </NavLink>
      <NavLink
        to="/dashboard/my-classes"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "  text-gray-900 underline " : "text-gray-600"
          }`
        }
      >
        <SiGoogleclassroom className="w-6 h-6" />

        <span className="mx-4 font-medium text-gray-500">My Classes</span>
      </NavLink>
      <NavLink
        to="/dashboard/instructor-profile"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "  text-gray-900 underline " : "text-gray-600"
          }`
        }
      >
        <CgProfile className="w-6 h-6" />

        <span className="mx-4 font-medium text-gray-500">Profile</span>
      </NavLink>
      <NavLink
        to="/dashboard/instructor-home"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "  text-gray-900 underline " : "text-gray-600"
          }`
        }
      >
        <TbBrandGoogleHome className="w-6 h-6" />

        <span className="mx-4 font-medium text-gray-500">Dashboard Home</span>
      </NavLink>
    </>
  );
};

export default InstractureMenu;
