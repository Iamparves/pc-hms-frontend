import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminHospitals from "./components/Dashboard/Admin/AdminHospitals";
import AdminProfile from "./components/Dashboard/Admin/AdminProfile";
import Admins from "./components/Dashboard/Admin/Admins";
import AddDoctor from "./components/Dashboard/Doctor/AddDoctor";
import UpdateDoctor from "./components/Dashboard/Doctor/UpdateDoctor";
import HospitalAppointments from "./components/Dashboard/Hospital/HospitalAppointments";
import HospitalDoctors from "./components/Dashboard/Hospital/HospitalDoctors";
import HospitalOverview from "./components/Dashboard/Hospital/HospitalOverview";
import HospitalProfile from "./components/Dashboard/Hospital/HospitalProfile";
import PatientAppointments from "./components/Dashboard/Patient/PatientAppointments";
import PatientProfile from "./components/Dashboard/Patient/PatientProfile";
import FormModal from "./components/Dashboard/shared/FormModal";
import Layout from "./components/shared/Layout";
import { Toaster } from "./components/ui/sonner";
import Dashboard from "./pages/Dashboard";
import DoctorProfile from "./pages/DoctorProfile";
import Doctors from "./pages/Doctors";
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
          {/* GENERAL ROUTES */}
          <Route path="/" element={<Layout />}>
            <Route path="" index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-otp" element={<VerifyAccount />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:doctorId" element={<DoctorProfile />} />
          </Route>

          {/* PATIENT DASHBOARD ROUTES */}
          <Route
            path="/dashboard/patient"
            element={<Dashboard allowedRoles={["patient"]} />}
          >
            <Route path="" element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<HospitalOverview />} />
            <Route path="appointments" element={<PatientAppointments />} />
            <Route path="profile" element={<PatientProfile />} />
          </Route>

          {/* ADMIN DASHBOARD ROUTES */}
          <Route
            path="/dashboard/admin"
            element={<Dashboard allowedRoles={["admin"]} />}
          >
            <Route path="" element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<HospitalOverview />} />
            <Route path="hospitals" element={<AdminHospitals />} />
            <Route path="admins" element={<Admins />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>

          {/* HOSPITAL DASHBOARD ROUTES */}
          <Route
            path="/dashboard/hospital"
            element={<Dashboard allowedRoles={["hospital"]} />}
          >
            <Route path="" element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<HospitalOverview />} />
            <Route path="doctors" element={<HospitalDoctors />}>
              <Route
                path="add"
                element={
                  <FormModal title={"Add new doctor"}>
                    <AddDoctor />
                  </FormModal>
                }
              ></Route>
              <Route
                path="edit/:doctorId"
                element={
                  <FormModal title={"Update Existing Doctor"}>
                    <UpdateDoctor />
                  </FormModal>
                }
              ></Route>
            </Route>
            <Route path="appointments" element={<HospitalAppointments />} />
            <Route path="profile" element={<HospitalProfile />} />
          </Route>

          {/* 404 PAGE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
