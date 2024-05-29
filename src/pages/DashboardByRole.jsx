import AdminDashboard from "@/components/Dashboard/Admin/AdminDashboard";
import HospitalDashboard from "@/components/Dashboard/Hospital/HospitalDashboard";
import PatientDashboard from "@/components/Dashboard/Patient/PatientDashboard";
import useAuth from "@/hooks/useAuth";
import { Navigate, useOutletContext, useParams } from "react-router-dom";

const DashboardByRole = () => {
  const { isLoading, user } = useAuth();
  const { role } = useParams();
  const context = useOutletContext();

  if (!user && !isLoading) return <Navigate to="/login" />;

  if (user?.role !== role && !isLoading)
    return <Navigate to={`/dashboard/${user.role}`} />;

  if (isLoading) return <div>Loading...</div>;

  if (role === "patient") {
    return <PatientDashboard context={context} />;
  } else if (role === "hospital") {
    return <HospitalDashboard context={context} />;
  } else if (role === "admin") {
    return <AdminDashboard context={context} />;
  }
};

export default DashboardByRole;
