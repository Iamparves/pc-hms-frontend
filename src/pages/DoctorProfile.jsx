import DoctorAppointment from "@/components/Doctors/DoctorAppointment";
import DoctorDetails from "@/components/Doctors/DoctorDetails";
import { getDoctorById } from "@/db/doctor";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const DoctorProfile = () => {
  const { doctorId } = useParams();

  const doctorQuery = useQuery({
    queryKey: ["doctor", { doctorId }],
    queryFn: () => getDoctorById(doctorId),
  });

  const doctor = doctorQuery.data?.data.doctor;

  return (
    <section>
      <div className="container py-10">
        <div className="grid grid-cols-[1fr_auto] gap-10">
          <DoctorDetails doctor={doctor} />
          <DoctorAppointment doctor={doctor} />
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
