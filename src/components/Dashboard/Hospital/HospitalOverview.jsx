import { getOverview } from "@/db/overview";
import { useStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import DashOverviewCards from "../Overview/HospitalOverviewCards";
import OverviewNotice from "../Overview/OverviewNotice";
import DashboardHeader from "../shared/DashboardHeader";

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
      <div className="h-[calc(100dvh-80px)] w-full">
        <div className="p-3 sm:p-5 xl:p-10">
          <div className="rounded-md border bg-white">
            <OverviewNotice role={user?.role} />
            {!overviewQuery.isFetching && (
              <DashOverviewCards overview={overview} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalOverview;
