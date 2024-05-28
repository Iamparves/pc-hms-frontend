import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-[100dvh]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
