import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "./Firebase/firebase.init";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import Home from "./Pages/HomePage/Home/Home";
import Dashboard from "./Pages/InventoryPage/Dashboard/Dashboard";
import Inventory from "./Pages/InventoryPage/Inventory/Inventory";
import Footer from "./Pages/SharedPage/Footer/Footer";
import Header from "./Pages/SharedPage/Header/Header";
import Loading from "../src/Pages/SharedPage/Loading/Loading";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
function App() {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <div className="min-h-[80vh] bg-gray-100">
        {pathname.includes("/dashboard") ? "" : <Header />}
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div>
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
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        )}
      </div>
      <ToastContainer />
      {pathname.includes("/dashboard") ? "" : <Footer />}
    </>
  );
}

export default App;
