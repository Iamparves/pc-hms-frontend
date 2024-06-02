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
  const [date, setDate] = useState(null);
  const offDays = doctor?.offDays?.map((od) => days[od]) || [];

  return (
    <div className="flex max-w-[360px] flex-col items-center justify-center gap-3.5 bg-white p-6">
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
  );
};

export default DoctorAppointment;
