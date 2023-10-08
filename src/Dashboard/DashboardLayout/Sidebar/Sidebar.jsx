import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { GrLogout, GrUserAdmin } from "react-icons/gr";

import { AiOutlineBars, AiOutlineHome } from "react-icons/ai";
import { FcSportsMode } from "react-icons/fc";
import { BsFillHouseAddFill } from "react-icons/bs";
import { AuthContext } from "../../../Providers/AuthProvider";
import AdminMenu from "../AdminMenu/AdminMenu";
import InstractureMenu from "../../InstractureMenu/InstractureMenu";
import UserMenu from "../../UserMenu/UserMenu";
import { Helmet } from "react-helmet-async";
const Sidebar = () => {
  const navigate = useNavigate();

  const { user, logOut, role } = useContext(AuthContext);

  const [isActive, setActive] = useState("false");

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className=" text-black flex justify-between md:hidden">
        <Helmet>
          <title>Sports Academy - Dashboard</title>
        </Helmet>
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <div className="flex items-center">
              <FcSportsMode className="text-yellow-700 text-[40px] "></FcSportsMode>
              <h1 className="text-indigo-500 font-serif  font-bold uppercase tracking-wider sm:text-4xl">
                BD Sport Academy
              </h1>
            </div>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex bg-slate-100 border flex-col justify-between overflow-x-hidden  w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div className="flex flex-col items-center text-neutral-500 font-semibold">
      <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
        <div className="flex items-center">
          <FcSportsMode className="text-gray-500 text-4xl" />
          <h1 className="text-gray-500 font-serif uppercase tracking-wider text-sm">
            BD Sport Academy
          </h1>
        </div>
      </div>
      <div className="mt-6 text-center">
        <span className="text-gray-500 font-medium">
          <GrUserAdmin className="inline-block text-gray-500 text-md" />{" "}
          {role ? role : "Student"}
        </span>
        <Link to="/dashboard/profile" className="block mt-2 font-medium text-gray-500 hover:underline">
          Name: {user?.displayName}
        </Link>
      </div>
    </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 text-neutral-500 ">
            <nav>
              <>
                {/* Menu Links */}
                {role && role === "admin" ? (
                  <AdminMenu></AdminMenu>
                ) : role && role === "instructor" ? (
                  <InstractureMenu></InstractureMenu>
                ) : (
                  <UserMenu></UserMenu>
                )}
              </>
            </nav>
          </div>
        </div>

        <div className="  ">
          <hr className="text-black h-2" />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-red-700 ${
                isActive ? "bg-gray-300  text-gray-400" : "text-white"
              }`
            }
          >
            <AiOutlineHome className="w-5 h-5 text-gray-600" />

            <span className="mx-4 font-medium text-gray-500">Home</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-red-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5 text-gray-600" />

            <span className="mx-4 text-gray-500 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
