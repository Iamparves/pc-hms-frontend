import { useStore } from "@/store";
import { useState } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";

const days = {
  SUN: 0,
  MON: 1,
  TUE: 2,
  WED: 3,
  THU: 4,
  FRI: 5,
  SAT: 6,
};

const DoctorAppointment = ({ doctor }) => {
  const user = useStore((state) => state.user);
  const [date, setDate] = useState(null);
  const offDays = doctor?.offDays?.map((od) => days[od]) || [];
  const notPatient = user.role === "doctor" || user.role === "hospital";

  return (
    <div className="bg-white">
      <div
        id="appointment"
        className="relative flex max-w-[360px] flex-col items-center justify-center gap-3.5 bg-white p-6 aria-disabled:pointer-events-none"
        aria-disabled={notPatient}
      >
        {notPatient && (
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] flex items-center justify-center bg-white/50 backdrop-blur-[2px]">
            <p className="bg-black/5 p-5 text-center">
              Login with a patient profile to book an appointment
            </p>
          </div>
        )}
        <div className="spac-y-2">
          <h2 className="w-full font-semibold">Book Your Appointment</h2>
          <p className="text-sm text-gray-500">
            Choose a suitable date to book your appointment with the doctor
          </p>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full rounded-md border [&>:first-child]:justify-center"
          disabled={(date) => {
            const currentDay = new Date();
            return (
              date < currentDay ||
              offDays.includes(date.getDay()) ||
              date > currentDay.setDate(currentDay.getDate() + 20)
            );
          }}
        />
        <Button className="w-full bg-blue hover:bg-blue/90" size="lg">
          Confirm Appointment
        </Button>
      </div>
    </div>
  );
};

export default DoctorAppointment;
