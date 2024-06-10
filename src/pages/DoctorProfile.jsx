import DoctorAppointment from "@/components/Doctors/DoctorAppointment";
import DoctorDetails from "@/components/Doctors/DoctorDetails";
import { getDoctorById } from "@/db/doctor";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const DoctorProfile = () => {
  const { doctorId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const doctorQuery = useQuery({
    queryKey: ["doctor", { doctorId }],
    queryFn: () => getDoctorById(doctorId),
  });

  const doctor = doctorQuery.data?.data?.doctor || {};

  useEffect(() => {
    if (location.hash === "#appointment") {
      document.getElementById("appointment").scrollIntoView();
    }
  }, []);

  useEffect(() => {
    if (!doctorQuery.isFetching && doctorQuery.data?.status === "fail") {
      toast.error("Doctor not found or has been deleted");
      return navigate("/doctors");
    }
  }, [doctorQuery.isFetching, doctor._id]);

  return (
    <section>
      <div className="container px-3 py-10 sm:px-5">
        <div className="mx-auto grid max-w-xl grid-cols-1 items-start gap-5 lg:max-w-none lg:grid-cols-[1fr_auto]">
          <DoctorDetails isFetching={doctorQuery.isFetching} doctor={doctor} />
          <DoctorAppointment
            doctorId={doctor._id}
            hospitalId={doctor.hospital?._id}
            doctorOffDays={doctor.offDays}
          />
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
