import { Button } from "@/components/ui/button";
import { getAllDoctors } from "@/db/doctor";
import { useQuery } from "@tanstack/react-query";
import { LuEye } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import DashDataTable from "../shared/DashDataTable";

const HospitalDoctorsTable = () => {
  const doctorsQuery = useQuery({
    queryKey: ["doctors"],
    queryFn: () => getAllDoctors(),
  });

  const doctors = doctorsQuery.data?.data?.doctors || [];

  const columns = [
    {
      accessorKey: "photo",
      header: "Photo",
      cell: (props) => {
        return (
          <img
            src={props.getValue() || "/doctor-avatar.jpg"}
            alt={props.row.original.name}
            className="size-12 rounded-full"
          />
        );
      },
      enableHiding: false,
      enableFiltering: false,
    },
    {
      accessorKey: "name",
      header: "Name",
      enableHiding: false,
    },
    {
      accessorKey: "qualifications",
      header: "Qualifications",
    },
    {
      accessorKey: "designation",
      header: "Designation",
    },
    {
      accessorKey: "department",
      header: "Department",
    },
    {
      accessorFn: (row) => row.chamberTime || "-",
      header: "Chamber Time",
    },
    {
      accessorFn: (row) => row.offDays?.join(", "),
      header: "Off Days",
    },
    {
      accessorFn: (row) => row._id,
      header: "View",
      cell: (props) => (
        <div className="flex max-w-[200px] items-center gap-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link to={`/doctors/${props.getValue()}`}>
              <LuEye className="text-lg" />
            </Link>
          </Button>
        </div>
      ),
      enableHiding: false,
    },
    {
      accessorFn: (row) => row._id,
      header: "Edit",
      cell: (props) => (
        <div className="flex max-w-[200px] items-center gap-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link to={`edit/${props.getValue()}`}>
              <TbEdit className="text-lg" />
            </Link>
          </Button>
        </div>
      ),
      enableHiding: false,
    },
    {
      accessorFn: (row) => row._id,
      header: "Delete",
      cell: (props) => {
        const doctorId = props.getValue();

        return (
          <div className="flex max-w-[200px] items-center gap-x-2">
            <Button variant="outline" size="icon">
              <MdDeleteOutline className="text-lg" />
            </Button>
          </div>
        );
      },
      enableHiding: false,
    },
  ];

  return (
    <div>
      <DashDataTable
        columns={columns}
        data={doctors}
        noPagination={false}
        isLoading={doctorsQuery.isFetching}
      />
    </div>
  );
};

export default HospitalDoctorsTable;
