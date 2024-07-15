import { getAllSpecialities } from "@/db/doctor";
import { useQuery } from "@tanstack/react-query";
import DoctorFilters from "../Doctors/DoctorFilters";

const FindDoctor = () => {
  const specialitiesQuery = useQuery({
    queryKey: ["specialities"],
    queryFn: getAllSpecialities,
  });

  const specialitiesList = specialitiesQuery.data?.data?.specialities || [];

  return (
    <section className="bg-[url(/doctor-home.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="bg-black/60 py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-[1fr_400px]">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
              <h2 className="text-3xl font-semibold leading-[1.1] text-white">
                Find the best doctors near you
              </h2>
              <p className="mt-5 text-white/90">
                Find the best doctors near you and book appointments online. Get
                the best treatment for your health issues from the best doctors
                in the city.
              </p>
            </div>
            <div className="bg-white p-5 md:p-8">
              <DoctorFilters selectable={specialitiesList} isHome />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindDoctor;
