import { FaRegHospital } from "react-icons/fa";
import { FaCalendarPlus, FaUserDoctor } from "react-icons/fa6";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import {
  RiAdminLine,
  RiArticleLine,
  RiCalendarScheduleLine,
} from "react-icons/ri";

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
      title: "Blogs",
      path: "blogs",
      icon: <RiArticleLine />,
    },
    {
      title: "Notice",
      path: "notice",
      icon: <HiOutlineBellAlert />,
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
    {
      title: "Add Appointment",
      path: "add-appointment",
      icon: <FaCalendarPlus />,
    },
    {
      title: "Blogs",
      path: "blogs",
      icon: <RiArticleLine />,
    },
    {
      title: "Notice",
      path: "notice",
      icon: <HiOutlineBellAlert />,
    },
  ],
  patient: [
    {
      title: "Overview",
      path: "overview",
      icon: <MdDashboard />,
    },
    {
      title: "Appointments",
      path: "appointments",
      icon: <RiCalendarScheduleLine />,
    },
  ],
};

const useMenuItems = () => menuItems;

export default useMenuItems;
