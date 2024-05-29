import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HospitalAppointments from "./components/Dashboard/Hospital/HospitalAppointments";
import HospitalDoctos from "./components/Dashboard/Hospital/HospitalDoctos";
import HospitalOverview from "./components/Dashboard/Hospital/HospitalOverview";
import Layout from "./components/shared/Layout";
import { Toaster } from "./components/ui/sonner";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import VerifyAccount from "./pages/VerifyAccount";

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-otp" element={<VerifyAccount />} />
          </Route>
          <Route
            path="/dashboard/admin"
            element={<Dashboard allowedRoles={["admin"]} />}
          >
            <Route path="" element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<h1>Overview</h1>} />
            <Route path="hospitals" element={<h1>Hospitals</h1>} />
            <Route path="admins" element={<h1>Admins</h1>} />
            <Route path="profile" element={<h1>Profile</h1>} />
          </Route>
          <Route
            path="/dashboard/hospital"
            element={<Dashboard allowedRoles={["hospital"]} />}
          >
            <Route path="" element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<HospitalOverview />} />
            <Route path="doctors" element={<HospitalDoctos />}></Route>
            <Route path="appointments" element={<HospitalAppointments />} />
            <Route path="profile" element={<h1>Profile</h1>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
