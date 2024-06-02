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
    <div className="rounded-mde mx-auto my-10 w-60 space-y-3 bg-white p-5">
      <h1>{doctor?.name}</h1>
      <p>{doctor?.specialities.map((s) => s.name).join(", ")}</p>
      <p>{doctor?.designation}</p>
      <p>{doctor?.qualifications}</p>
    </div>
  );
};

export default DoctorProfile;
