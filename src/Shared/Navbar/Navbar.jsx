import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FcSportsMode } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?  localStorage.getItem('theme'): 'light')
  useEffect(()=>{
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])

  const toggleHandle=(e)=>{
    if(e.target.checked){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }



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
        <NavLink className="link font-serif" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/teacher">
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/all-classes">
          Classes
        </NavLink>
      </li>
      <li>
      <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={toggleHandle} checked={theme === 'light'? false: true} />
  
  {/* sun icon */}
  <svg className="swap-on  fill-current w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
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
              className="w-[40px] h-[40px] rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </li>
          <li>
            <NavLink
              onClick={handleLogout}
              className=" font-abc text-[14px] font-semibold uppercase  bg-yellow-500 text-white px-4 py-2 rounded-full"
              to="/login"
            >
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            className=" font-abc text-[14px] font-semibold uppercase  bg-yellow-500 text-white px-4 py-2 rounded-full"
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="w-full sticky top-0 z-10 border-b-[1px] border-neutral-100 bg-[#617453]">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center p-8 ">
        <div className="flex items-center">
          <FcSportsMode className="text-yellow-700 text-[40px] "></FcSportsMode>
          <h1 className="text-yellow-400 font-mono  font-bold  sm:text-4xl">
             Sport Academy
          </h1>
        </div>

        <ul className=" hidden md:block md:flex space-x-4">{navItem}</ul>

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
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#617453] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="text-yellow-700  font-bold uppercase tracking-wider text-xl">
            Sports Academy
          </h1>
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
