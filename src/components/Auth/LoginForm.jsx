import { login, resendVerificationOTP } from "@/db/auth";
import { useStore } from "@/store";
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
  mobileNo: z
    .string()
    .min(11, { message: "Mobile no must be at least 11 characters long" })
    .max(11, { message: "Mobile no must be at least 11 characters long" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobileNo: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (result) => {
      if (result.status === "success") {
        toast("Login successful", {
          type: "success",
        });

        form.reset();
        setUser(result.data?.user);
        localStorage.setItem("jwtToken", result.data?.token);

        return navigate(`/dashboard/${result.data?.user?.role}`);
      } else {
        if (result.data?.user && !result.data?.user?.isVerified) {
          toast.error("Account not verified", {
            description: "Please verify your account to login.",
            action: (
              <Button
                onClick={async () => {
                  await resendVerificationOTP(result.data?.user?.mobileNo);
                  toast.dismiss();
                  navigate(`/verify-otp?phone=${result.data?.user?.mobileNo}`);
                }}
                className="bg-blue px-2 text-[13px] hover:bg-blue/90"
                size="sm"
              >
                Verify Now
              </Button>
            ),
          });

          return;
        }

        toast("Login failed", { type: "error", description: result.message });
      }
    },
    onError: (error) => {
      console.error(error);
      toast("Login failed", { type: "error" });
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="relative space-y-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <SignupFormField
            label="Mobile No."
            name="mobileNo"
            placeholder="Enter your mobile no."
            formControl={form.control}
            disabled={loginMutation.isPending}
          />
          <SignupFormField
            label="Password"
            name="password"
            placeholder="Enter your password"
            inputType="password"
            formControl={form.control}
            disabled={loginMutation.isPending}
          />

          <Button
            className="w-full bg-blue py-[22px] text-[15px] hover:bg-blue/90"
            type="submit"
            disabled={loginMutation.isPending}
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
