import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { LuEye } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import DashDataTable from "../shared/DashDataTable";

const DashBlogsTable = ({ blogs, isFetching }) => {
  const columns = [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "publishedDate",
      header: "Pubished Date",
      cell: (props) => {
        return format(props.getValue(), "dd MMM yyyy");
      },
    },
    {
      accessorKey: "author.name",
      header: "Author",
    },
    {
      accessorFn: (row) => row._id,
      header: "View",
      cell: (props) => (
        <div className="flex max-w-[200px] items-center gap-x-2">
          <Button
            className="text-gray-600"
            variant="outline"
            size="icon"
            asChild
          >
            <Link target="_blank" to={`/blogs/${props.getValue()}`}>
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
          <Button className="text-blue" variant="outline" size="icon" asChild>
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
      cell: (props) => (
        <div className="flex max-w-[200px] items-center gap-x-2">
          <Button className="text-[#FF5556]" variant="outline" size="icon">
            <MdDeleteOutline className="text-lg" />
          </Button>
        </div>
      ),
      enableHiding: false,
    },
  ];

  return (
    <div>
      <DashDataTable
        data={blogs}
        columns={columns}
        filterPlaceholder={"Search blogs..."}
        isLoading={isFetching}
      />
    </div>
  );
};

export default DashBlogsTable;
