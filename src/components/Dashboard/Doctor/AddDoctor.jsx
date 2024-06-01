import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { createDoctor } from "@/db/doctor";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import DashFormField from "../shared/DashFormField";
import DoctorSpecialities from "./DoctorSpecialities";

const doctorSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  photo: z.string(),
  // qualifications: z.string().min(3),
  about: z.string(),
  specialities: z
    .array(z.string())
    .nonempty({ message: "Select at least one speciality" }),
  designation: z.string(),
  // languages: z.array(z.string()).nonempty(),
  institute: z.string(),
  department: z.string(),
  appointmentNo: z.string(),
  chamberTime: z.string(),
  // offDays: z.array(z.string()).nonempty(),
  floorNo: z.string(),
  roomNumber: z.string(),
  // branchNames: z.array(z.string()).nonempty(),
  bmdcNo: z.string(),
  consultationFee: z.number().min(0),
  phone: z.string(),
  feesToShowReport: z.number().min(0),
  hospital: z.string(),
});

const AddDoctor = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      name: "",
      photo: "",
      qualifications: "",
      about: "",
      specialities: [],
      designation: "",
      languages: ["English", "Bengali"],
      institute: "",
      department: "",
      appointmentNo: "",
      chamberTime: "",
      offDays: ["FRI", "SAT"],
      floorNo: "",
      roomNumber: "",
      branchNames: [
        "Popular Diagnostic Center, Laxmipur Branch",
        "Popular Diagnostic Center, Feni Branch",
      ],
      bmdcNo: "",
      consultationFee: 0,
      phone: "",
      feesToShowReport: 0,
      hospital: "",
    },
  });

  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: createDoctor,
    onSuccess: (result) => {
      if (result.status === "success") {
        toast("Doctor added successfully", {
          type: "success",
        });

        queryClient.invalidateQueries("doctors");
        queryClient.invalidateQueries("specialities");
        navigate("../");
      } else {
        toast("Failed to add doctor", {
          type: "error",
        });
      }
    },
    onError: (error) => {
      toast("Failed to add doctor", {
        type: "error",
      });
    },
  });

  const onSubmit = (data) => {
    const doctorData = {
      ...data,
      languages: ["English", "Bengali"],
      offDays: ["FRI", "SAT"],
      branchNames: [
        "Popular Diagnostic Center, Laxmipur Branch",
        "Popular Diagnostic Center, Feni Branch",
      ],
    };

    createMutation.mutate(doctorData);
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="relative space-y-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <DashFormField
            label="Name"
            name="name"
            placeholder="Enter doctor name"
            formControl={form.control}
          />
          <DashFormField
            label="Qualifications"
            name="qualifications"
            placeholder="Enter doctor qualifications"
            formControl={form.control}
          />
          <DoctorSpecialities
            label="Specialities"
            name="specialities"
            placeholder="Enter doctor specialities"
            formControl={form.control}
            onSelectChange={form.setValue}
          />
          <DashFormField
            label="Designation"
            name="designation"
            placeholder="Enter doctor designation"
            formControl={form.control}
          />
          {/* <DashFormField
            label="Languages"
            name="languages"
            placeholder="Separate languages with comma (,)"
            formControl={form.control}
          /> */}
          <DashFormField
            label="Institute"
            name="institute"
            placeholder="Enter doctor institute"
            formControl={form.control}
          />
          <DashFormField
            label="Department"
            name="department"
            placeholder="Enter doctor department"
            formControl={form.control}
          />
          <DashFormField
            label="Appointment No"
            name="appointmentNo"
            placeholder="Enter doctor appointment number"
            formControl={form.control}
          />
          <DashFormField
            label="Chamber Time"
            name="chamberTime"
            placeholder="Enter doctor chamber time"
            formControl={form.control}
          />
          {/* <DashFormField
            label="Off Days"
            name="offDays"
            placeholder="Separate off days with comma"
            formControl={form.control}
          /> */}
          <DashFormField
            label="Floor Number"
            name="floorNo"
            placeholder="Enter doctor floor number"
            formControl={form.control}
          />
          <DashFormField
            label="Room Number"
            name="roomNumber"
            placeholder="Enter doctor room number"
            formControl={form.control}
          />
          {/* <DashFormField
            label="Branch Names"
            name="branchNames"
            placeholder="Separate branch names with semicolon (;)"
            formControl={form.control}
          /> */}
          <DashFormField
            label="BMDC No"
            name="bmdcNo"
            placeholder="Enter doctor BMDC number"
            formControl={form.control}
          />
          <DashFormField
            label="Consultation Fee"
            name="consultationFee"
            inputType="number"
            placeholder="Enter doctor consultation fee"
            formControl={form.control}
          />
          <DashFormField
            label="Phone"
            name="phone"
            placeholder="Enter doctor phone number"
            formControl={form.control}
          />
          <DashFormField
            label="Fees To Show Report"
            name="feesToShowReport"
            inputType="number"
            placeholder="Enter fees to show report"
            formControl={form.control}
          />
          <DashFormField
            label="Hospital"
            name="hospital"
            placeholder="Enter doctor hospital"
            formControl={form.control}
          />
          <DashFormField
            label="About Doctor"
            name="about"
            placeholder="Enter short description about doctor"
            formControl={form.control}
            isTextarea={true}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddDoctor;
