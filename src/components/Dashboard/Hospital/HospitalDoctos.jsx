import { ScrollArea } from "@/components/ui/scroll-area";
import DashDataTable from "../shared/DashDataTable";
import DashboardHeader from "../shared/DashboardHeader";
import { columns } from "./DoctorColumns";
import doctorsData from "./doctors.json";

const HospitalDoctos = () => {
  return (
    <>
      <DashboardHeader title="Doctors" desc="Manage doctors with ease" />
      <ScrollArea className="h-[calc(100dvh-80px)] w-full">
        <div className="p-3 sm:p-5 xl:p-10">
          <DashDataTable
            columns={columns}
            data={doctorsData}
            noPagination={false}
            // pageSize={2}
          />
        </div>
      </ScrollArea>
    </>
  );
};

export default HospitalDoctos;
