import { Button } from "@/components/ui/button";
import { Outlet, useNavigate } from "react-router-dom";
import DashDataTable from "../shared/DashDataTable";
import DashboardHeader from "../shared/DashboardHeader";
import { columns } from "./DoctorColumns";
import doctorsData from "./doctors.json";

const HospitalDoctos = () => {
  const navigate = useNavigate();
  return (
    <>
      <DashboardHeader title="Doctors" desc="Manage doctors with ease" />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <Outlet />
        <div className="p-3 sm:p-5 xl:p-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Doctors List</h2>
            <Button
              onClick={() => navigate("add")}
              className="bg-blue hover:bg-blue/90"
            >
              Add Doctor
            </Button>
          </div>
          <DashDataTable
            columns={columns}
            data={doctorsData}
            noPagination={false}
          />
        </div>
      </div>
    </>
  );
};

export default HospitalDoctos;
