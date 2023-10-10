import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
// import { FcSportsMode } from "react-icons/fc";
import logo from '../../../src/assets/academy1.png'

const LatestNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleHandle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-500 underline" : " text-gray-600"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-green-500 underline" : " text-gray-600"
          }
          to="/teacher"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-green-500 underline" : " text-gray-600"
          }
          to="/all-classes"
        >
          Classes
        </NavLink>
      </li>
      <li>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={toggleHandle}
            checked={theme === "light" ? false : true}
          />

          {/* sun icon */}
          <svg
            className="swap-on  fill-current w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-500 underline" : " text-gray-600"
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <img
              referrerPolicy="no-referrer"
              className="w-[30px] h-[30px] rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </li>
          <li>
            <NavLink
              onClick={handleLogout}
              className="btn-fourth"
              to="/login"
            >
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink
           className=" border border-black px-4 py-1 rounded text-gray-600 font-medium hover:opacity-75"
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="bg-slate-100 border  p-6  sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-gray-600 text-xl font-bold flex items-center"
            >
              {/* <FcSportsMode className="text-gray-600 text-[40px] "></FcSportsMode> */}
              <img width={35} height={35} src={logo} alt="logo" />
             <span className="text-gray-300">Sports</span> Academy
            </NavLink>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-4">{navItem}</ul>
          </div>

          {/* Hamburger Menu (shown on mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-green focus:outline-none"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-2 md:hidden rounded-lg shadow-lg">
            <ul className="bg-slate-200 rounded-lg p-4">{navItem}</ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LatestNav;
