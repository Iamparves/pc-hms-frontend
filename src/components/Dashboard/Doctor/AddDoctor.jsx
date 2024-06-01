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
import DoctorOffDays from "./DoctorOffDays";
import DoctorPhotoUpload from "./DoctorPhotoUpload";
import DoctorSpecialities from "./DoctorSpecialities";

const doctorSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  photo: z.string(),
  qualifications: z.string().min(3),
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
  offDays: z.array(z.string()),
  floorNo: z.string(),
  roomNumber: z.string(),
  // branchNames: z.array(z.string()).nonempty(),
  bmdcNo: z.string(),
  consultationFee: z.number().positive(),
  phone: z.string(),
  feesToShowReport: z.number().positive(),
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
      offDays: [],
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
    },
  });

  const checkedDays = form.watch("offDays", []);

  const handleDaysChange = (day, checked) => {
    const newCheckedDays = checked
      ? [...checkedDays, day]
      : checkedDays.filter((d) => d !== day);

    form.setValue("offDays", newCheckedDays);
  };

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
          className="relative space-y-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-[240px_1fr] gap-6">
            <DoctorPhotoUpload />
            <div className="space-y-4">
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
                formControl={form.control}
                onSelectChange={form.setValue}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-3">
            <DashFormField
              label="Institute"
              name="institute"
              placeholder="Enter doctor institute"
              formControl={form.control}
            />
            <DashFormField
              label="Designation"
              name="designation"
              placeholder="Enter doctor designation"
              formControl={form.control}
            />
            <DashFormField
              label="Department"
              name="department"
              placeholder="Enter doctor department"
              formControl={form.control}
            />
            <DashFormField
              label="BMDC No"
              name="bmdcNo"
              placeholder="Enter doctor BMDC number"
              formControl={form.control}
            />
            <DashFormField
              label="Appointment Number"
              name="appointmentNo"
              placeholder="Enter appointment phone number"
              formControl={form.control}
            />
            <DashFormField
              label="Phone"
              name="phone"
              placeholder="Enter doctor phone number"
              formControl={form.control}
            />
            <DashFormField
              label="Chamber Time"
              name="chamberTime"
              placeholder="Enter doctor chamber time"
              formControl={form.control}
            />
            <DoctorOffDays
              formControl={form.control}
              onCheckedChange={handleDaysChange}
              checkedDays={checkedDays}
            />
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
            <DashFormField
              label="Consultation Fee"
              name="consultationFee"
              inputType="number"
              placeholder="Enter doctor consultation fee"
              formControl={form.control}
            />

            <DashFormField
              label="Fees To Show Report"
              name="feesToShowReport"
              inputType="number"
              placeholder="Enter fees to show report"
              formControl={form.control}
            />
            {/* <DashFormField
            label="Languages"
            name="languages"
            placeholder="Separate languages with comma (,)"
            formControl={form.control}
          /> */}
            {/* <DashFormField
            label="Branch Names"
            name="branchNames"
            placeholder="Separate branch names with semicolon (;)"
            formControl={form.control}
          /> */}
            <div className="col-span-2">
              <DashFormField
                label="About Doctor"
                name="about"
                placeholder="Enter short description about doctor"
                formControl={form.control}
                isTextarea={true}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              className="bg-blue hover:bg-blue/90"
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddDoctor;
