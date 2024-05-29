import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardHeader from "../shared/DashboardHeader";

const HospitalOverview = () => {
  return (
    <>
      <DashboardHeader title="Overview" desc="Get a comprehensive snapshot" />
      <ScrollArea className="h-[calc(100dvh-80px)] w-full">
        <div className="p-3 sm:p-5 xl:p-10"></div>
      </ScrollArea>
    </>
  );
};

export default HospitalOverview;
