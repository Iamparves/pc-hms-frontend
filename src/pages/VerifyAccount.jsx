import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useAuth from "@/hooks/useAuth";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useState } from "react";
import { redirect } from "react-router-dom";

const VerifyAccount = () => {
  const [otpValue, setOtpValue] = useState("");
  const { user } = useAuth();

  if (user?.isVerified) {
    return redirect("/");
  }

  return (
    <section className="flex min-h-[calc(100dvh-80px)] items-center justify-center px-5">
      <div className="max-w-md rounded-lg border bg-white p-5 text-center">
        <h3 className="mb-1 text-xl font-semibold">Account Verification</h3>
        <p className="mb-6 text-sm text-gray-500">
          A 6-digit OTP has been sent to your phone number. Please enter the OTP
          below to verify your account.
        </p>
        <div className="flex justify-center">
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            value={otpValue}
            onChange={(value) => setOtpValue(value)}
          >
            <InputOTPGroup className="">
              {Array.from({ length: 6 }).map((_, index) => {
                return (
                  <InputOTPSlot
                    className="h-12 w-12 text-base font-medium"
                    index={index}
                    key={index}
                  />
                );
              })}
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="mb-5 mt-2 text-sm text-gray-500">
          {otpValue === "" ? (
            <>Please enter the OTP sent to your phone.</>
          ) : (
            <>
              You entered: <span className="text-black">{otpValue}</span>
            </>
          )}
        </div>
        <Button>Verify OTP</Button>
      </div>
    </section>
  );
};

export default VerifyAccount;
