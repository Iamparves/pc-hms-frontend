import useAuth from "@/hooks/useAuth";
import { Navigate, useParams } from "react-router-dom";

const DashboardByRole = () => {
  const { isLoading, user } = useAuth();
  const { role } = useParams();

  if (!user && !isLoading) return <Navigate to="/login" />;

  if (user?.role !== role && !isLoading)
    return <Navigate to={`/dashboard/${user.role}`} />;

  if (isLoading) return <div>Loading...</div>;

  return <div>{role}</div>;
};

export default DashboardByRole;
