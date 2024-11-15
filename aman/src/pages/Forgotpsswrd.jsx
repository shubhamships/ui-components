import { z } from "zod";
import { useState } from "react";
import Input from "../components/Input";
const Forgotpsswrd = ({ handleClick }) => {
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
    <div>
      <div className="flex flex-col p-6 ">
        <h3 className="font-bold text-xl text-center tracking-tight">
          Forgot Your Password?
        </h3>
        <p className="pt-6 text-sm text-center">
          Enter email address associated with your account and you will receive
          an email to reset your password.
        </p>
      </div>
      <div className="p-6 pt-0">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1 ">
            <label className="text-sm font-normal">
              Email <span className="text-red-600 ml-1">*</span>
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email ID ..."
            />
            {error.email && (
              <p className="text-xs font-semibold text-red-600">
                {error.email._errors[0]}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="bg-blue-900 w-full h-11 mt-10 text-white text-sm font-medium rounded-lg max-w-sm"
              type="submit"
            >
              Submit
            </button>
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
export default Forgotpsswrd;
