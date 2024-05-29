import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import DashDataTable from "../shared/DashDataTable";
import DashboardHeader from "../shared/DashboardHeader";
import { columns } from "./DoctorColumns";
import doctorsData from "./doctors.json";

const HospitalDoctos = () => {
  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <>
      <DashboardHeader title="Doctors" desc="Manage doctors with ease" />
      <ScrollArea className="h-[calc(100dvh-80px)] w-full">
        <div className="p-3 sm:p-5 xl:p-10">
          <div className="mb-3 w-80">
            <Input
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search doctors"
            />
          </div>
          <DashDataTable
            columns={columns}
            data={doctorsData}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            noPagination={false}
          />
        </div>
      </ScrollArea>
    </>
  );
};

export default HospitalDoctos;
