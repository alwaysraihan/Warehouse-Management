import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { XIcon, MenuIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../Firebase/firebase.init";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <div className=" py-2 md:py-4 bg-gray-800 text-white">
        <div className="container px-4 md:px-0 lg:px-4  mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-bold text-xl text-indigo-600">
              RECOATCH
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-6 transition delay-75 text-white md:hidden"
              id="navbar-toggle"
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
          <nav
            className={`flex gap-6 md:ml-auto  justify-between md:justify-end items-center absolute w-full md:static flex-col md:flex-row transition delay-200 ease-in-out  z-10 bg-gray-800 ${
              menuOpen ? "top-[44px] left-0 w-full pb-5" : "top-[-500px]"
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 bg-indigo-600"
                  : "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 bg-indigo-600"
                  : "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 "
              }
            >
              About
            </NavLink>
            <NavLink
              to="blogs"
              className={({ isActive }) =>
                isActive
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 bg-indigo-600"
                  : "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 "
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/dashboard/manage-inventory"
              className={({ isActive }) =>
                isActive
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 bg-indigo-600"
                  : "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 "
              }
            >
              Manage Inventory
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 bg-indigo-600"
                  : "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 "
              }
            >
              Contact
            </NavLink>
            {/* {user?.displayName ? (
              <h1 className="text-xl text-yellow-200 font-semibold">
                {user.displayName}
              </h1>
            ) : (
              ""
            )} */}
            {user ? (
              <button
                onClick={handleSignOut}
                className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded  transition-colors duration-300 mt-1 md:mt-0 md:ml-1 hover:bg-indigo-600 hover:text-white"
              >
                Signout
              </button>
            ) : (
              <div>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 lg:px-4 md:mx-2 text-white bg-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
                      : "p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300 "
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 lg:px-4 md:mx-2  text-center border border-solid border-indigo-600 rounded  transition-colors duration-300 mt-1 md:mt-0 md:ml-1 bg-indigo-600 text-white"
                      : "p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded  transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                  }
                >
                  Signup
                </NavLink>
              </div>
            )}
          </nav>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
