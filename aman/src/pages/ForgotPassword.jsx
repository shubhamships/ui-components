import { z } from "zod";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Error from "../components/Error";
import Label from "../components/Label";

const ForgotPassword = ({ handleClick }) => {
  const [formData, setFormData] = useState({ email: "" });
  const [error, setError] = useState({});
  const schema = z.object({
    email: z.string().email("Must be a valid email address"),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse({
      ...formData,
    });
    if (!result.success) {
      const formattedErrors = result.error.format();
      setError(formattedErrors);
    } else {
      setError({});
    }
  };
  return (
    <div className="mb-32">
      <div className="flex flex-col p-6">
        <p className="font-bold text-xl text-center tracking-tight">
          Forgot Your Password?
        </p>
        <p className="pt-6 text-sm text-center">
          Enter email address associated with your account and you will receive
          an email to reset your password.
        </p>
      </div>
      <div className="p-6 pt-0">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <Label lableTitle="Email" />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email ID ..."
            />
            {error.email && <Error>{error.email._errors[0]}</Error>}
          </div>
          <div className="flex items-center justify-center">
            <Button buttonName="Submit" />
          </div>
        </form>
      </div>
      <div className="font-medium text-center">
        <a href="#">
          <span className="text-blue-800" onClick={handleClick}>
            Return to login
          </span>
        </a>
      </div>
    </div>
  );
};
export default ForgotPassword;
