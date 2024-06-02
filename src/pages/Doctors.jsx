import DoctorCard from "@/components/Doctors/DoctorCard";
import DoctorFilters from "@/components/Doctors/DoctorFilters";
import { getAllDoctors, getAllSpecialities } from "@/db/doctor";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Doctors = () => {
  const [queryString, setQueryString] = useState("");

  const doctorsQuery = useQuery({
    queryKey: ["doctors", queryString],
    queryFn: () => getAllDoctors(queryString),
    placeholderData: keepPreviousData,
  });

  const doctors = doctorsQuery.data?.data?.doctors || [];

  const specialitiesQuery = useQuery({
    queryKey: ["specialities"],
    queryFn: getAllSpecialities,
  });

  const specialities = specialitiesQuery.data?.data?.specialities || [];

  return (
    <section className="mx-auto max-w-[420px] sm:max-w-none">
      <div className="container grid grid-cols-1 items-start gap-8 px-5 py-10 md:py-16 lg:grid-cols-[380px_1fr]">
        <div className="rounded-lg bg-white p-5">
          <DoctorFilters
            setQueryString={setQueryString}
            selectable={specialities}
          />
        </div>
        <div className="">
          {!doctorsQuery.isFetching && doctors.length > 0 && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
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
