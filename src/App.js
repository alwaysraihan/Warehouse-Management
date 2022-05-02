import { Route, Routes } from "react-router-dom";
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
  return (
    <>
      <div className="min-h-[80vh]">
        <Header />
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
      <Footer />
    </>
  );
}

export default App;
