import { NavLink } from "react-router-dom";

import { AiFillFileAdd } from "react-icons/ai";

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
        <AiFillFileAdd className="w-6 h-6" />

        <span className="mx-4 font-medium text-gray-500">My Classes</span>
      </NavLink>
    </>
  );
};

export default InstractureMenu;
