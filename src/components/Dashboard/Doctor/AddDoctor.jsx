import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const doctorSchema = z.object({
  name: z.string().min(3),
  photo: z.string().url(),
  qualifications: z.string().min(3),
  about: z.string(),
  specialities: z.array(z.string()).min(1),
  designation: z.string(),
  languages: z.array(z.string()).min(1),
  institute: z.string(),
  department: z.string(),
  appointmentNo: z.string().min(11).max(11),
  chamberTime: z.string(),
  offDays: z.array(z.string()).min(1),
  floorNo: z.string(),
  roomNumber: z.string(),
  branchNames: z.array(z.string()).min(1),
  bmdcNo: z.string(),
  consultationFee: z.number().min(0),
  phone: z.string().min(11).max(11),
  feesToShowReport: z.number().min(0),
  hospital: z.string(),
});

const AddDoctor = () => {
  const form = useForm({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      name: "",
      photo: "",
      qualifications: "",
      about: "",
      specialities: [],
      designation: "",
      languages: [],
      institute: "",
      department: "",
      appointmentNo: "",
      chamberTime: "",
      offDays: [],
      floorNo: "",
      roomNumber: "",
      branchNames: [],
      bmdcNo: "",
      consultationFee: 0,
      phone: "",
      feesToShowReport: 0,
      hospital: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  form.setValue("name", "John Doe");

  return (
    <div>
      <Form {...form}>
        <form
          className="relative space-y-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* <SignupFormField
            name="name"
            label="Name"
            formControl={form.control}
          /> */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddDoctor;
