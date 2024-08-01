import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { hospitalBookAppointment } from "@/db/appointments";
import { sendSms } from "@/lib/sendSms";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import { toast } from "sonner";

const days = {
  SUN: 0,
  MON: 1,
  TUE: 2,
  WED: 3,
  THU: 4,
  FRI: 5,
  SAT: 6,
};

const HospitalAppointmentBookForm = ({ doctor }) => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [date, setDate] = useState(null);
  const offDays = doctor.offDays?.map((od) => days[od]) || [];

  const sendConfirmationSMS = async ({ serialNo, appointmentDate }) => {
    const message = `Appointment of ${doctor.name} at ${doctor.hospital?.name} on ${format(new Date(appointmentDate), "dd MMM yyyy")} has been confirmed. Serial No: ${serialNo}. Room No: ${doctor.roomNumber} in floor ${doctor.floorNo}. Please attend between ${doctor.chamberTime}`;

    const result = await sendSms(mobileNo, message);

    if (result.success_message) {
      toast.success("Confirmation SMS sent successfully");
    } else {
      toast.error("Failed to send confirmation SMS");
    }
  };

  const queryClient = useQueryClient();

  const appointmentMutation = useMutation({
    mutationFn: hospitalBookAppointment,
    onSuccess: (result) => {
      if (result.status === "success") {
        queryClient.invalidateQueries("appointments");
        toast.success("Appointment booked successfully");

        setName("");
        setMobileNo("");
        setDate(null);

        sendConfirmationSMS({
          serialNo: result.data?.appointment?.serialNo,
          appointmentDate: result.data?.appointment?.appointmentDate,
        });
      } else {
        toast.error(result.message || "Failed to book appointment");
      }
    },
    onError: (error) => {
      toast.error(error.message || "Failed to book appointment");
    },
  });

  const handleAppointmentBooking = () => {
    if (!date) return toast.error("Please select an appointment date");
    if (!name) return toast.error("Please enter a name");
    if (!mobileNo) return toast.error("Please enter a mobile number");

    const appointmentData = {
      doctor: doctor._id,
      appointmentDate: date.toISOString(),
      name: name,
      mobileNo: mobileNo,
    };

    appointmentMutation.mutate(appointmentData);
  };

  return (
    <div className="space-y-5">
      <div className="">
        <h4 className="mb-2 text-sm font-semibold text-gray-700">Doctor</h4>
        <Input value={doctor.name} disabled />
      </div>
      <div className="">
        <h4 className="mb-2 text-sm font-semibold text-gray-700">Name</h4>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter patient name"
        />
      </div>
      <div className="">
        <h4 className="mb-2 text-sm font-semibold text-gray-700">Mobile no.</h4>
        <Input
          value={mobileNo}
          onChange={(e) => {
            const re = /^[0-9\b]+$/;
            const number = e.target.value;

            if ((number === "" || re.test(number)) && number.length <= 11) {
              setMobileNo(e.target.value);
            }
          }}
          placeholder="Enter patient mobile no."
        />
      </div>
      <div className="max-w-[280px]">
        <h4 className="mb-2 text-sm font-semibold text-gray-700">
          Appointment Date
        </h4>
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
              date > currentDay.setDate(currentDay.getDate() + 30)
            );
          }}
        />
      </div>
      <div className="flex justify-center">
        <Button
          onClick={handleAppointmentBooking}
          className="bg-blue px-5 hover:bg-blue/90"
          size="lg"
          disabled={
            !date || !name || !mobileNo || appointmentMutation.isPending
          }
        >
          {appointmentMutation.isPending
            ? "Booking Appointment..."
            : "Book Appointment"}
        </Button>
      </div>
    </div>
  );
};

export default HospitalAppointmentBookForm;
