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
      <div className=" py-2 md:py-4 bg-gray-800 shadow-xl text-white z-10">
        <div className="container px-4  lg:px-4  mx-auto lg:flex lg:items-center">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-bold text-xl text-white">
              WareHouse
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-6 md:w-10 transition delay-75 text-white lg:hidden"
              id="navbar-toggle"
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
          <nav
            className={`flex gap-6 md:ml-auto  justify-between lg:justify-end items-center absolute w-full lg:static flex-col lg:flex-row transition delay-200 ease-in-out  z-10 bg-gray-800 ${
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

            {user ? (
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
            ) : (
              ""
            )}
            {user ? (
              <NavLink
                to="/dashboard/add-inventory-item"
                className={({ isActive }) =>
                  isActive
                    ? "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 bg-indigo-600"
                    : "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 "
                }
              >
                Add Item
              </NavLink>
            ) : (
              ""
            )}
            {user ? (
              <NavLink
                to="/dashboard/my-item"
                className={({ isActive }) =>
                  isActive
                    ? "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 bg-indigo-600"
                    : "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 "
                }
              >
                My Items
              </NavLink>
            ) : (
              ""
            )}
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
