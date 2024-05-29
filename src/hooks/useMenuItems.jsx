import { FaRegHospital } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { RiAdminLine, RiCalendarScheduleLine } from "react-icons/ri";

const menuItems = {
  admin: [
    {
      title: "Overview",
      path: "overview",
      icon: <MdDashboard />,
    },
    {
      title: "Hospitals",
      path: "hospitals",
      icon: <FaRegHospital />,
    },
    {
      title: "Admins",
      path: "admins",
      icon: <RiAdminLine />,
    },
  ],
  hospital: [
    {
      title: "Overview",
      path: "overview",
      icon: <MdDashboard />,
    },
    {
      title: "Doctors",
      path: "doctors",
      icon: <FaUserDoctor />,
    },
    {
      title: "Appointments",
      path: "appointments",
      icon: <RiCalendarScheduleLine />,
    },
  ],
  patient: [
    {
      title: "Overview",
      path: "overview",
      icon: <MdDashboard />,
    },
  ],
};

const useMenuItems = () => menuItems;

export default useMenuItems;
