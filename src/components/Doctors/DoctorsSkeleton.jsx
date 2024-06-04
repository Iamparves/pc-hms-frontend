import { Skeleton } from "../ui/skeleton";

const DoctorsSkeleton = () => {
  return (
    <div className="w-full rounded-md bg-white p-5">
      <Skeleton className="mb-5 h-3 w-[300px]" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {[...Array(6)].map((_, index) => (
          <Skeleton
            key={index}
            className="animate-pulse aspect-[1/1.5] w-full md:aspect-[1/1.2] lg:aspect-[2/1]"
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorsSkeleton;
