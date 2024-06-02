import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddDoctor from "./components/Dashboard/Doctor/AddDoctor";
import HospitalAppointments from "./components/Dashboard/Hospital/HospitalAppointments";
import HospitalDoctos from "./components/Dashboard/Hospital/HospitalDoctos";
import HospitalOverview from "./components/Dashboard/Hospital/HospitalOverview";
import HospitalProfile from "./components/Dashboard/Hospital/HospitalProfile";
import FormModal from "./components/Dashboard/shared/FormModal";
import Layout from "./components/shared/Layout";
import { Toaster } from "./components/ui/sonner";
import Dashboard from "./pages/Dashboard";
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
          <Route path="/" element={<Layout />}>
            <Route path="" index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-otp" element={<VerifyAccount />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:doctorId" element={<Doctors />} />
          </Route>
          <Route
            path="/dashboard/admin"
            element={<Dashboard allowedRoles={["admin"]} />}
          >
            <Route path="" element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<HospitalOverview />} />
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
            <Route path="doctors" element={<HospitalDoctos />}>
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
                    <AddDoctor />
                  </FormModal>
                }
              ></Route>
            </Route>
            <Route path="appointments" element={<HospitalAppointments />} />
            <Route path="profile" element={<HospitalProfile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
