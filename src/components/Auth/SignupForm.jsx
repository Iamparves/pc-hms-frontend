import { signup } from "@/db/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import SignupFormField from "./SignupFormField";

const formSchema = z.object({
  name: z.string().min(3),
  mobileNo: z
    .string()
    .min(11, { message: "Mobile no must be 11 characters long" })
    .max(11, { message: "Mobile no must be 11 characters long" }),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

const SignupForm = () => {
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

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      if (data.status === "success") {
        toast("Signup successful", {
          type: "success",
          description: data.mobileNo
            ? "Verification OTP sent to your mobile number. Please check and verify your account"
            : "Please login to continue",
        });

        form.reset();

        if (data.mobileNo) {
          return navigate(`/verify-otp?phone=${data.mobileNo}`);
        } else {
          return navigate("/login");
        }
      } else {
        toast("Signup failed", { type: "error", description: data.message });
      }
    },
    onError: (error) => {
      console.error(error);
      toast("Signup failed", { type: "error" });
    },
  });

  const onSubmit = (values) => {
    signupMutation.mutate(values);
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="relative space-y-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <SignupFormField
            label="Full name"
            name="name"
            placeholder="Enter your name"
            formControl={form.control}
            disabled={signupMutation.isPending}
          />
          <SignupFormField
            label="Mobile No."
            name="mobileNo"
            placeholder="Enter your mobile no."
            formControl={form.control}
            disabled={signupMutation.isPending}
          />
          <SignupFormField
            label="Password"
            name="password"
            placeholder="Enter your password"
            inputType="password"
            formControl={form.control}
            disabled={signupMutation.isPending}
          />
          <SignupFormField
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Enter your password again"
            inputType="password"
            formControl={form.control}
            disabled={signupMutation.isPending}
          />

          <Button
            className="w-full bg-blue py-[22px] text-[15px] hover:bg-blue/90"
            type="submit"
            disabled={signupMutation.isPending}
          >
            Signup
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
