import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import Home from "./Pages/HomePage/Home/Home";
import Dashboard from "./Pages/InventoryPage/Dashboard/Dashboard";
import Inventory from "./Pages/InventoryPage/Inventory/Inventory";
import Footer from "./Pages/SharedPage/Footer/Footer";
import Header from "./Pages/SharedPage/Header/Header";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="min-h-[80vh] bg-gray-100">
        {pathname === "/" ? <Header /> : ""}

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard/inventory/:id"
            element={
              <RequireAuth>
                <Inventory />
              </RequireAuth>
            }
          />
          <Route
            path="dashboard/*"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
      <ToastContainer />
      {pathname === "/" ? <Footer /> : ""}
    </>
  );
}

export default App;
