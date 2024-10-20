import { Outlet } from "react-router-dom";
import Navber from "../pages/Share/Navber";

const MainLayout = () => {
  return (
    <div className="mt-0.5">
      <Navber />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
