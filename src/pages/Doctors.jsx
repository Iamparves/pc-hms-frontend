import DoctorCard from "@/components/Doctors/DoctorCard";
import DoctorFilters from "@/components/Doctors/DoctorFilters";
import DoctorsSkeleton from "@/components/Doctors/DoctorsSkeleton";
import Pagination from "@/components/Doctors/Pagination";
import { getAllDoctors, getAllSpecialities } from "@/db/doctor";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Doctors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [queryString, setQueryString] = useState("");

  const skip = (currentPage - 1) * 10;

  const doctorsQuery = useQuery({
    queryKey: ["doctors", queryString],
    queryFn: () => getAllDoctors(queryString),
    placeholderData: keepPreviousData,
  });

  const doctors = doctorsQuery.data?.data?.doctors || [];
  const totalDocs = doctorsQuery.data?.data?.totalDocs || 0;
  const totalPages = Math.ceil(totalDocs / 10) || 1;

  const specialitiesQuery = useQuery({
    queryKey: ["specialities"],
    queryFn: getAllSpecialities,
  });

  const specialities = specialitiesQuery.data?.data?.specialities || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <section className="mx-auto max-w-[420px] sm:max-w-none">
      <div className="container grid grid-cols-1 items-start gap-8 px-5 py-10 md:py-16 lg:grid-cols-[380px_1fr]">
        <div className="rounded-lg bg-white p-5">
          <DoctorFilters
            setQueryString={setQueryString}
            selectable={specialities}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="">
          {doctorsQuery.isSuccess && (
            <p className="mb-3 text-[15px] font-medium leading-tight text-gray-400 md:text-base lg:text-lg">
              Showing{" "}
              <span className="text-[#1d1d1d]">
                {doctors.length > 0 ? skip + 1 : 0}-{skip + doctors.length}{" "}
              </span>{" "}
              of <span className="text-[#1d1d1d]">{totalDocs}</span> results
            </p>
          )}
          {!doctorsQuery.isFetching && doctors.length > 0 && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
          )}
          {doctorsQuery.isFetching && <DoctorsSkeleton />}
          {!doctorsQuery.isFetching && doctors.length === 0 && (
            <div className="rounded-lg bg-white px-5 py-14 text-center">
              <p className="text-base font-medium text-gray-400">
                No doctors found
              </p>
            </div>
          )}
          <Pagination
            hasPrevPage={currentPage > 1}
            hasNextPage={currentPage < totalPages}
            lastPage={totalPages}
            isFetching={doctorsQuery.isFetching}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Doctors;
