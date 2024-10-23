import { Outlet } from "react-router-dom";
import Navber from "../pages/Share/Navber";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="mt-0.5">
      <Navber />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
