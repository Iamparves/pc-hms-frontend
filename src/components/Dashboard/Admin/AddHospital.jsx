import SignupFormField from "@/components/Auth/SignupFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { createHospital } from "@/db/hospital";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  mobileNo: z
    .string()
    .min(11, { message: "Mobile no must be at least 11 characters long" })
    .max(11, { message: "Mobile no must be at least 11 characters long" }),
  password: z.string().min(8, {
    message: "Password must contain at least 8 characters",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must contain at least 8 characters",
  }),
});

const AddHospital = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobileNo: "",
      password: "",
      confirmPassword: "",
    },
  });

  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: createHospital,
    onSuccess: (data) => {
      if (data.status === "success") {
        toast.success("Hospital added successful");

        queryClient.invalidateQueries(["hospitals"]);

        return navigate("..");
      } else {
        toast.error(data.message || "Failed to add hospital");
      }
    },
    onError: (error) => {
      console.error(error);
      toast.error(data.message || "Failed to add hospital");
    },
  });

  const handleAddHospital = (values) => {
    if (values.password !== values.confirmPassword) {
      return toast.error("Password doesn't match");
    }

    addMutation.mutate(values);
  };

  return (
    <div className="mx-auto max-w-md">
      <Form {...form}>
        <form
          className="relative space-y-3"
          onSubmit={form.handleSubmit(handleAddHospital)}
        >
          <SignupFormField
            label="Name"
            name="name"
            placeholder="Enter hospital name"
            formControl={form.control}
            disabled={addMutation.isPending}
          />
          <SignupFormField
            label="Mobile No."
            name="mobileNo"
            placeholder="Enter mobile no."
            formControl={form.control}
            disabled={addMutation.isPending}
          />
          <SignupFormField
            label="Password"
            name="password"
            placeholder="Enter password"
            inputType="password"
            formControl={form.control}
            disabled={addMutation.isPending}
          />
          <SignupFormField
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Enter password again"
            inputType="password"
            formControl={form.control}
            disabled={addMutation.isPending}
          />

          <Button
            className="w-full bg-blue py-[22px] text-[15px] hover:bg-blue/90"
            type="submit"
            disabled={addMutation.isPending}
          >
            Add Hospital
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddHospital;
