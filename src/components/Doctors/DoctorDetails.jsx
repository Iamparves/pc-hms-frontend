import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

const DataRow = ({ title, value }) => {
  return (
    <tr class="text-sm text-[#151515]">
      <td class="border border-[#ebebeb] bg-[#f8f8f8] px-2 py-3 font-semibold sm:w-[200px] sm:px-5">
        {title}
      </td>
      <td class="border border-[#ebebeb] px-2 py-3 sm:px-5">{value}</td>
    </tr>
  );
};

const DoctorDetails = ({ doctor }) => {
  const {
    name,
    photo,
    qualifications,
    about,
    specialities,
    designation,
    languages,
    institute,
    department,
    appointmentNo,
    chamberTime,
    offDays,
    floorNo,
    roomNumber,
    branchNames,
    bmdcNo,
    consulatationFee,
    phone,
    feesToShowReport,
  } = doctor;

  return (
    <div className=" bg-white p-6">
      <div className="grid grid-cols-[300px_1fr] gap-x-10">
        <div className="">
          <img
            src={
              photo ||
              "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=400:*"
            }
            alt={name}
            className="aspect-[3/4] object-cover"
          />
        </div>
        <div className="">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-medium text-blue">{name}</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline">
                  Share
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <table class="w-full border border-[#ebebeb]">
            <tbody>
              <DataRow title="Qualifications" value={qualifications} />
              <DataRow title="Designation" value={designation} />
              <DataRow title="Languages" value={languages.join(", ")} />
              <DataRow title="Department" value={department} />
              <DataRow title="Institute" value={institute} />
              <DataRow title="Chamber Time" value={chamberTime} />
              <DataRow title="Off Days" value={offDays.join(", ")} />
              <DataRow title="Floor No." value={floorNo} />
              <DataRow title="Room No." value={roomNumber} />
              <DataRow title="Consultation Fee" value={consulatationFee} />
              <DataRow title="Fees to Show Report" value={feesToShowReport} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
