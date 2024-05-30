import { Button } from "@/components/ui/button";
import { useStore } from "@/store";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import DashDataTable from "../shared/DashDataTable";
import DashboardHeader from "../shared/DashboardHeader";
import { columns } from "./DoctorColumns";
import doctorsData from "./doctors.json";

const HospitalDoctos = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);

  const handleAddDoctor = () => {
    if (user.profile?.district) {
      return navigate("add");
    }

    toast("Hospital district is not set", {
      type: "error",
      description: "Please complete your hospital profile to add doctors",
    });

    navigate("../profile");
  };

  return (
    <>
      <DashboardHeader title="Doctors" desc="Manage doctors with ease" />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <Outlet />
        <div className="p-3 sm:p-5 xl:p-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Doctors List</h2>
            <Button
              onClick={handleAddDoctor}
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
