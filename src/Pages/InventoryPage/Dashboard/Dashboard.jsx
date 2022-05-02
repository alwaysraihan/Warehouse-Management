import React from "react";
import { Route, Routes } from "react-router-dom";
import ManageInventory from "../Inventory/ManageInventory/ManageInventory";
import Slider from "../slider/Slider";
import DashboardHome from "./DashboardHome";

const Dashboard = () => {
  return (
    <>
      <div className="flex ">
        <div>
          <Slider />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="dashboard/home" element={<DashboardHome />} />
            <Route path="/manage-inventory" element={<ManageInventory />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
