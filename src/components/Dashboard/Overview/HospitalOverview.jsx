import { Skeleton } from "@/components/ui/skeleton";
import { getOverview } from "@/db/overview";
import { useStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import DashboardHeader from "../shared/DashboardHeader";
import HospitalOverviewAppointments from "./HospitalOverviewAppointments";
import HospitalOverviewCards from "./HospitalOverviewCards";
import OverviewNotice from "./OverviewNotice";

const HospitalOverview = () => {
  const user = useStore((state) => state.user);

  const overviewQuery = useQuery({
    queryKey: ["overview", user?._id],
    queryFn: () => getOverview(user?.role),
    enabled: !!user?._id,
  });

  const overview = overviewQuery?.data?.data || {};

  return (
    <>
      <DashboardHeader title="Overview" desc="Get a comprehensive snapshot" />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="p-3 sm:p-5 xl:p-10">
          <div className="rounded-md border bg-white">
            <div className="px-3 pt-5 md:px-5">
              <OverviewNotice role={user?.role} />
            </div>
            {!overviewQuery.isFetching && (
              <HospitalOverviewCards overview={overview} />
            )}
            {overviewQuery.isFetching && (
              <div className="grid grid-cols-2 gap-3 p-3 sm:gap-5 sm:p-5 md:grid-cols-3 2xl:grid-cols-[repeat(6,auto)]">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[40px_1fr] gap-3 rounded-md border border-gray-100 bg-gray-50/80 p-5"
                  >
                    <Skeleton className="size-10 rounded-full" />
                    <div className="">
                      <Skeleton className="mb-2 h-5 w-10" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            )}
            <HospitalOverviewAppointments />
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalOverview;
