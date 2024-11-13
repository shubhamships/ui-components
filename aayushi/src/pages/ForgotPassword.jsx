/* eslint-disable react/prop-types */
import { useState } from "react";
import { z } from "zod";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Label } from "../components/Label";

const forgotPasswordSchema = z.object({
  email: z.string().email("Must be a valid email address"),
});
export const ForgotPassword = ({ setPassword }) => {
  const [data, setData] = useState({
    email: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = forgotPasswordSchema.safeParse(data);

    if (result.success) {
      console.log("Email submitted successfully:", data.email);
      setError({});
    } else {
      const errorMessages = {};
      result.error.errors.forEach((err) => {
        errorMessages[err.path[0]] = err.message;
      });
      setError(errorMessages);
    }
  };

  return (
    <div className="">
      <div className="px-7 pt-7 pb-4">
        <p className="text-xl font-semibold text-center">
          Forgot Your Password?
        </p>
      </div>
      <div className="px-6 mt-4  mb-36">
        <p className="text-sm text-black text-center">
          Enter email address associated with your account <br />
          and you will receive an email to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <Label type={"Email"} />
            <Input
              type="email"
              placeholder="Enter Email ID..."
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            {error.email && (
              <p className="text-red-500 text-xs font-medium">{error.email}</p>
            )}
          </div>
          <div>
            <div className="flex items-center justify-center">
              <Button />
            </div>
          </div>
          <div className="mt-5">
            <span
              className="text-blue-800 font-medium hover:underline flex item-center justify-center cursor-pointer "
              onClick={() => setPassword(true)}
            >
              Return to Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
