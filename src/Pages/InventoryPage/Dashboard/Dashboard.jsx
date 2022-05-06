import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import AddNewStoclItem from "../AddNewInventory/AddNewStoclItem";
import ManageInventory from "../Inventory/ManageInventory/ManageInventory";
import MyItem from "../MyItems/MyItem";
import Slider from "../slider/Slider";
import DashboardHome from "./DashboardHome";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex relative lg:static  ">
        <div className="fixed bottom-0  bg-[rgb(0,7,61)] h-[100vh]  ">
          <div className="absolute  top-0 left-0 h-full lg:static">
            <Slider />
          </div>
        </div>
        <div className="w-[100%] ml-[50px] ">
          <div>
            <div className=" w-[100%] flex items-center justify-between px-2 md:px-5 shadow-md bg-white py-2 bg-opacity-50">
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-500 font-semibold ">
                  Admin Pannel
                </h1>
              </div>
              <div className="w-16 h-16 relative">
                <div>
                  <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-green-500 rounded-full"></span>
                  <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-green-500 rounded-full animate-ping"></span>
                </div>
                {user?.photoURL ? (
                  <img
                    className="w-16 h-16 rounded-full border-2 border-blue-600"
                    src={user.photoURL}
                    alt="profile"
                  />
                ) : (
                  <img
                    className="w-16 h-16 rounded-full border-2 border-blue-600"
                    src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                    alt="profile"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="px-2 md:px-5 lg:px-8 min-h-screen xl:px-12 2xl:px-16">
            <Routes>
              <Route path="/admin/home" element={<DashboardHome />} />
              <Route path="/my-item" element={<MyItem />} />
              <Route path="/manage-inventory" element={<ManageInventory />} />
              <Route path="/add-inventory-item" element={<AddNewStoclItem />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
