import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";
import DashDataTable from "../shared/DashDataTable";
import DashboardHeader from "../shared/DashboardHeader";

const Notice = () => {
  const columns = [];
  return (
    <>
      <DashboardHeader title="Notice" desc="Manage all notice" />
      <div className="mx-auto h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <Outlet />
        <div className="p-3 sm:p-5 xl:p-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Notice List</h2>
            <Button className="bg-blue hover:bg-blue/90">Add Notice</Button>
          </div>
          <div>
            <DashDataTable
              columns={columns}
              data={[]}
              isLoading={false}
              filterPlaceholder={"Search notice..."}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
