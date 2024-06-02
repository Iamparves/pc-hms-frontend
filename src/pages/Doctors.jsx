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

  console.log(queryString);

  return (
    <section>
      <div className="container grid grid-cols-[400px_1fr] items-start gap-10 py-10 md:py-16">
        <div className="rounded-lg bg-white p-5">
          <DoctorFilters
            setQueryString={setQueryString}
            selectable={specialities}
          />
        </div>
        <div className="">
          {!doctorsQuery.isFetching && doctors.length > 0 && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
