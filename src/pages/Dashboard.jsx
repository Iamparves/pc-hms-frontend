import DashboardSidebar from "@/components/Dashboard/Sidebar/DashboardSidebar";
import { useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { role } = useParams();

  if (!role) {
    return <Navigate to="/" />;
  }

  return (
    <main className="grid h-screen grid-cols-1 bg-lightBG lg:grid-cols-[280px_1fr]">
      <DashboardSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="h-full w-full overflow-hidden">
        <Outlet context={[sidebarOpen, setSidebarOpen]} />
      </div>
    </main>
  );
};

export default Dashboard;
