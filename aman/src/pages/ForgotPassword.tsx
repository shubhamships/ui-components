import { z } from "zod";
import { useState } from "react";
import Error from "@/components/Error";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";

const schema = z.object({
  email: z.string().email("Must be a valid email address"),
});
interface ForgotPasswordProps {
  handleClick: () => void;
}

interface FormData {
  email: string;
}

interface ErrorState {
  email?: { _errors: string[] };
}
const ForgotPassword = ({ handleClick }: ForgotPasswordProps) => {
  const [formData, setFormData] = useState<FormData>({ email: "" });
  const [error, setError] = useState<ErrorState>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      <div className="flex flex-col p-6 text-center">
        <p className="font-bold text-xl tracking-tight">Forgot Your Password?</p>
        <p className="pt-6 text-sm ">
          Enter email address associated with your account and you will receive an email to reset your password.
        </p>
      </div>
      <div className="p-6 pt-0">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <FormInput
              lableTitle="Email"
              inputvarient="m"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email ID ..."
            />
            {error.email && <Error>{error.email._errors[0]}</Error>}
          </div>
          <div className="">
            <Button title="Submit" className="w-full mt-10" size="xl" onClick={handleSubmit} />
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
