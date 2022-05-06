import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";

const DashboardHome = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="grid grid-cols-1   gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* card 1  */}
        <div className="p-4  bg-white transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-2">
              <h1 className="text-lg font-body text-center">My Profile</h1>
              <span className="text-gray-400">
                {user.displayName ? user.displayName : "User"}
              </span>
            </div>
            <div className=" bg-gray-200 rounded-md">
              {user?.photoURL ? (
                <img
                  className="w-24 h-24 rounded-md"
                  src={user.photoURL}
                  alt="profile"
                />
              ) : (
                <img
                  className="w-24 h-24 rounded-md"
                  src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                  alt="profile"
                />
              )}
            </div>
          </div>
          <div>
            <span className=" font-body">
              {user.email ? user.email : "user@gmail.com"}
            </span>
          </div>
        </div>
        {/* card 2  */}
        <div className="p-4  bg-white transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">Total Dealers</span>
              <span className="text-lg font-semibold">520</span>
            </div>
            <div className=" bg-gray-200 rounded-md ">
              <img
                className="w-24 h-24 rounded-md"
                src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                alt="profile"
              />
            </div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
              89%
            </span>
            <span> Active Users</span>
          </div>
        </div>
        {/* card 3 */}
        <div className="p-4 bg-white  transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">New Users</span>
              <span className="text-lg font-semibold">14</span>
            </div>
            <div className=" bg-gray-200 rounded-md">
              <img
                className="w-24 h-24 rounded-md"
                src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                alt="profile"
              />
            </div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
              10%
            </span>
            <span> Increased this week</span>
          </div>
        </div>
        {/* card 4 */}
        <div className="p-4 bg-white  transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400">New Users</span>
              <span className="text-lg font-semibold">72</span>
            </div>
            <div className=" bg-gray-200 rounded-md">
              <img
                className="w-24 h-24 rounded-md"
                src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                alt="profile"
              />
            </div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
              14%
            </span>
            <span> Increased this month</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
