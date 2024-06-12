import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useMemo } from "react";
import { FaDownload } from "react-icons/fa";
import { toast } from "sonner";

const HospitalAppointmentDownload = ({ appointments, queryString }) => {
  const doc = new jsPDF();
  const includesDoctor = queryString.includes("doctor=");
  const includesDate = queryString.includes("dayId=");

  const columns = useMemo(() => {
    const baseColumns = ["SL.", "Patient", "Contact No."];

    if (includesDoctor && includesDate) {
      return [...baseColumns, "Chamber Time"];
    }

    if (includesDoctor) {
      return [...baseColumns, "Appointment Date", "Chamber Time"];
    }

    if (includesDate) {
      return [...baseColumns, "Doctor", "Chamber Time"];
    }

    return [...baseColumns, "Doctor", "Appointment Date", "Chamber Time"];
  }, [includesDoctor, includesDate]);

  const sortedAppointments = [...appointments].sort((a, b) => {
    if (includesDate) {
      return a.serialNo - b.serialNo;
    } else {
      return new Date(a.appointmentDate) - new Date(b.appointmentDate);
    }
  });

  const rows = sortedAppointments.map((appointment, index) => {
    const { patient, doctor, serialNo, appointmentDate } = appointment;

    const baseRow = [
      String(serialNo).padStart(2, 0),
      patient.name,
      patient.mobileNo,
    ];

    if (includesDoctor && includesDate) {
      return [...baseRow, doctor.chamberTime];
    }

    if (includesDoctor) {
      return [
        ...baseRow,
        format(new Date(appointmentDate), "dd MMM yyyy"),
        doctor.chamberTime,
      ];
    }

    if (includesDate) {
      return [...baseRow, doctor.name, doctor.chamberTime];
    }

    {
      return [
        ...baseRow,
        doctor.name,
        format(new Date(appointmentDate), "dd MMM yyyy"),
        doctor.chamberTime,
      ];
    }
  });

  const topMargin = includesDoctor && includesDate ? 30 : 20;

  const handleAppointmentDownload = () => {
    if (appointments.length === 0) {
      return toast.error("No appointments to download");
    }

    doc.autoTable({
      head: [columns],
      body: rows,
      theme: "striped",
      margin: { top: topMargin, left: 5, right: 5 },
      styles: {
        fontSize: 11,
        cellPadding: {
          top: 4,
          bottom: 4,
          left: 2.5,
          right: 2.5,
        },
        overflow: "linebreak",
      },
      headStyles: {
        fillColor: [52, 165, 228],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      didDrawPage: (data) => {
        doc.setFontSize(16);
        const pageWidth = doc.internal.pageSize.getWidth();

        if (data.pageNumber === 1) {
          if (includesDoctor && includesDate) {
            doc.text(appointments[0].doctor.name, pageWidth / 2, 15, {
              align: "center",
            });
            doc.setFontSize(12);
            doc.text(
              format(new Date(appointments[0].appointmentDate), "dd MMM yyyy"),
              pageWidth / 2,
              22,
              { align: "center" },
            );
          } else if (includesDoctor) {
            doc.text(appointments[0].doctor.name, pageWidth / 2, 15, {
              align: "center",
            });
          } else if (includesDate) {
            doc.text(
              format(new Date(appointments[0].appointmentDate), "dd MMM yyyy"),
              pageWidth / 2,
              15,
              { align: "center" },
            );
          } else {
            doc.text("Appointments", pageWidth / 2, 15, { align: "center" });
          }

          data.settings.margin.top = 10;
        }

        const footerText = "Developed by Posh Coder";
        const pageSize = doc.internal.pageSize;
        const pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        doc.setFontSize(10);
        doc.text(footerText, data.settings.margin.left, pageHeight - 5);
      },
    });

    doc.save("appointments.pdf");
  };

  return (
    <Button
      onClick={handleAppointmentDownload}
      className="bg-blue hover:bg-blue/90"
    >
      <FaDownload className="mr-2" /> Download PDF
    </Button>
  );
};

export default HospitalAppointmentDownload;
