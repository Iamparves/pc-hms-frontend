import DoctorAppointment from "@/components/Doctors/DoctorAppointment";
import DoctorDetails from "@/components/Doctors/DoctorDetails";
import { getDoctorById } from "@/db/doctor";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const DoctorProfile = () => {
  const { doctorId } = useParams();
  const location = useLocation();

  const doctorQuery = useQuery({
    queryKey: ["doctor", { doctorId }],
    queryFn: () => getDoctorById(doctorId),
  });

  const doctor = doctorQuery.data?.data.doctor || {};

  useEffect(() => {
    if (location.hash === "#appointment") {
      document.getElementById("appointment").scrollIntoView();
    }
  }, []);

  return (
    <section>
      <div className="container py-10">
        <div className="grid grid-cols-[1fr_auto] items-start gap-5">
          <DoctorDetails doctor={doctor} />
          <DoctorAppointment doctor={doctor} />
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
