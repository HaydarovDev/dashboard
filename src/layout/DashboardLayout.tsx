import { Outlet } from "react-router-dom";
import Sidebar from "../auth/components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default DashboardLayout;
