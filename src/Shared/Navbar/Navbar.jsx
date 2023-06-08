import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FcSportsMode } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navItem = (
    <>
      <li>
        <NavLink className="link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/blog">
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/allToys">
          Classes
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink className="link" to="/dashboard">
              Dashboard
            </NavLink>
          </li>

          <li>
            <img
              className="w-[30px] rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </li>
          <li>
            <NavLink
              onClick={handleLogout}
              className=" font-abc text-[14px] font-semibold uppercase  bg-indigo-500 text-white px-4 py-2 rounded-full"
              to="/login"
            >
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            className=" font-abc text-[14px] font-semibold uppercase  bg-indigo-500 text-white px-4 py-2 rounded-full"
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="w-full sticky top-0 z-10 border-b-[1px] border-neutral-100 bg-white">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center p-8 ">
        <div className="flex items-center">
          <FcSportsMode className="text-yellow-700 text-[40px] "></FcSportsMode>
          <h1 className="text-indigo-500 font-serif  font-bold uppercase tracking-wider sm:text-4xl">
            BD Sport Academy
          </h1>
        </div>

        <ul className=" hidden md:flex space-x-4">{navItem}</ul>

        <div onClick={handleNav} className="block md:hidden">
          {navOpen ? (
            <AiOutlineClose size={20} className="text-white" />
          ) : (
            <AiOutlineMenu size={20} className="text-white" />
          )}
        </div>

        <ul
          className={
            navOpen
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-blue-100] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="text-yellow-700  font-bold uppercase tracking-wider text-xl">
            Toys Zone
          </h1>
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
