import { FaUserDoctor } from "react-icons/fa6";
import OverviewCard from "./OverviewCard";

const DashOverviewCards = ({ overview }) => {
  const {
    doctors,
    appointments,
    upcomingAppointments,
    blogs,
    comments,
    notices,
  } = overview;

  return (
    <div className="grid grid-cols-2 gap-3 p-3 sm:gap-5 sm:p-5 md:grid-cols-3 2xl:grid-cols-[repeat(6,auto)]">
      <OverviewCard
        title={doctors}
        desc="Total Doctors"
        icon={<FaUserDoctor className="text-[#F59115]" />}
        className="bg-[#FEF2E2]"
      />
      <OverviewCard
        title={appointments}
        desc="Total Appointments"
        icon={<FaUserDoctor className="text-[#41C385]" />}
        className="bg-[#E6F5EF]"
      />
      <OverviewCard
        title={upcomingAppointments}
        desc="Upcoming Appointments"
        icon={<FaUserDoctor className="text-[#1F77FA]" />}
        className="bg-[#E9F1FF]"
      />
      <OverviewCard
        title={blogs}
        desc="Total Blogs"
        icon={<FaUserDoctor className="text-[#b92eff]" />}
        className="bg-[#f7e8ff]"
      />
      <OverviewCard
        title={comments}
        desc="Total Comments"
        icon={<FaUserDoctor className="text-[#79ea4f]" />}
        className="bg-[#eeffe8]"
      />
      <OverviewCard
        title={notices}
        desc="Total Notices"
        icon={<FaUserDoctor className="text-[#ff2e6d]" />}
        className="bg-[#ffe8ef]"
      />
    </div>
  );
};

export default DashOverviewCards;
