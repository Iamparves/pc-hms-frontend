import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0 py-0 hover:bg-transparent hover:text-white"
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
    accessorKey: "offDays",
    header: "Off Days",
    cell: (props) => props.getValue()?.join(", "),
  },
];

const DoctorColumns = () => {
  return <div>DoctorColumns</div>;
};

export default DoctorColumns;
