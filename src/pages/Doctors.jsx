import DoctorCard from "@/components/Doctors/DoctorCard";
import { getAllDoctors } from "@/db/doctor";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Doctors = () => {
  const [queryStr, setQueryStr] = useState("");

  const doctorsQuery = useQuery({
    queryKey: ["doctors", queryStr],
    queryFn: () => getAllDoctors(`?name=${queryStr}`),
  });

  const doctors = doctorsQuery.data?.data?.doctors || [];

  return (
    <section>
      <div className="container grid grid-cols-[400px_1fr] items-start gap-10 py-10 md:py-16">
        <div className="rounded-xl bg-white p-5">
          <h2 className="text-2xl font-semibold">Filters</h2>
          <p className="my-2 text-sm text-gray-400">
            All filters will be here. For now, you can search by doctor's name.
          </p>
          <input
            type="text"
            placeholder="Search by doctor's name"
            className="mt-5 w-full rounded-lg border border-gray-200 p-2"
            value={queryStr}
            onChange={(e) => setQueryStr(e.target.value)}
          />
        </div>
        <div className="">
          {!doctorsQuery.isFetching && doctors.length > 0 && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
          {doctorsQuery.isFetching && <p>Loading...</p>}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
