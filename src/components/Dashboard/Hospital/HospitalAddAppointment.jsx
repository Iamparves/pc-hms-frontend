import Loader from "@/components/shared/Loader";
import { getDoctorById } from "@/db/doctor";
import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import DashboardHeader from "../shared/DashboardHeader";
import HospitalAppointmentBookForm from "./HospitalAppointmentBookForm";

const HospitalAddAppointment = () => {
  const [params] = useSearchParams();
  const doctorId = params.get("doctor");

  const doctorQuery = useQuery({
    queryKey: ["doctor", { doctorId }],
    queryFn: () => getDoctorById(doctorId),
  });

  const doctor = doctorQuery.data?.data?.doctor || {};

  return (
    <>
      <DashboardHeader title="Add Appointment" desc="Add a new appointment" />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-scroll">
        <div className="p-3 sm:p-5 xl:p-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold">New Appointment</h2>
          </div>
          <div className="rounded-md bg-white p-5 md:rounded-lg md:p-8">
            {(!doctorId || (!doctorQuery.isFetching && !doctor._id)) && (
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Doctor not found
                </h2>
                <p className="mt-2 text-gray-600">
                  Please select a doctor from the doctor list to add an
                  appointment
                </p>
                <Link
                  className="mt-3 block rounded-full bg-blue px-4 py-2.5 text-white"
                  to="/dashboard/hospital/doctors"
                >
                  View Doctors
                </Link>
              </div>
            )}
            {doctorQuery.isFetching && (
              <div className="flex flex-col items-center gap-3 py-8">
                <Loader className="size-16" />
                <p className="text-gray-500">Loading Doctor</p>
              </div>
            )}
            <div className="flex flex-col items-center">
              {!doctorQuery.isFetching && doctor._id && (
                <HospitalAppointmentBookForm doctor={doctor} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalAddAppointment;
