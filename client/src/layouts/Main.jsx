import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* outlet */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
