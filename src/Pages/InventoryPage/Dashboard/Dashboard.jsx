import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNewStoclItem from "../AddNewInventory/AddNewStoclItem";
import ManageInventory from "../Inventory/ManageInventory/ManageInventory";
import Slider from "../slider/Slider";
import DashboardHome from "./DashboardHome";

const Dashboard = () => {
  return (
    <>
      <div className="flex ">
        <div className="sticky top-0 bg-[rgb(0,7,61)] ">
          <Slider />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/admin/home" element={<DashboardHome />} />
            <Route path="/manage-inventory" element={<ManageInventory />} />
            <Route path="/add-inventory-item" element={<AddNewStoclItem />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
