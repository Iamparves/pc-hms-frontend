import { LuCalendarClock, LuCalendarDays } from "react-icons/lu";
import OverviewCard from "./OverviewCard";

const PatientOverviewCards = ({ overview }) => {
  const { appointments, upcomingAppointments, notices } = overview;
  return (
    <div className="grid grid-cols-2 gap-3 p-3 sm:gap-5 sm:p-5 2xl:grid-cols-[repeat(6,auto)]">
      <OverviewCard
        title={appointments}
        desc="Total Appointments"
        icon={<LuCalendarDays className="text-[#1F77FA]" />}
        className="bg-[#E9F1FF] 2xl:max-w-[360px]"
        path="/dashboard/patient/appointments"
      />
      <OverviewCard
        title={upcomingAppointments}
        desc="Upcoming Appointments"
        icon={<LuCalendarClock className="text-[#41C385]" />}
        className="bg-[#E6F5EF] 2xl:max-w-[360px]"
        path="/dashboard/patient/appointments"
      />
      {/* <OverviewCard
        title={notices}
        desc="Total Notices"
        icon={<HiOutlineBellAlert className="text-[#ff2e6d]" />}
        className="bg-[#ffe8ef]"
      /> */}
    </div>
  );
};

export default PatientOverviewCards;
