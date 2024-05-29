import { Navigate, Outlet, useParams } from "react-router-dom";

const Dashboard = () => {
  const { role } = useParams();

  if (!role) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>This is dashboard</h1>
      <Outlet />
    </div>
  );
};

export default Dashboard;
