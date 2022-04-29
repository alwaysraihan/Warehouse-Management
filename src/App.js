import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import Footer from "./Pages/SharedPage/Footer/Footer";
import Header from "./Pages/SharedPage/Header/Header";

function App() {
  return (
    <>
      <div className="min-h-[80vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
