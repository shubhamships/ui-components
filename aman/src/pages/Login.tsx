import { useState } from "react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import withLoading from "../components/withLoading";
import apiClient from "../api/ApiClient";
import Error from "../components/Error";
import FormInput from "@/components/FormInput";
import PasswordFormInput from "@/components/PasswordFormInput";

const LoadingButton = withLoading();

const schema = z.object({
  email: z.string().email("Must be a valid email address"),
  password: z.string().min(6, "Password must be 6 or more characters long"),
});

interface Loginprops {
  handleClick: () => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

interface FormData {
  email: string;
  password: string;
}

interface ErrorState {
  email?: { _errors: string[] };
  password?: { _errors: string[] };
}

const Login = ({ handleClick, isLoading, setIsLoading }: Loginprops) => {
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const [error, setError] = useState<ErrorState>({});
  const [wrongError, setWrongError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = schema.safeParse({
      ...formData,
    });
    if (!result.success) {
      const formattedErrors = result.error.format();
      setError(formattedErrors);
    } else {
      setError({});
      setIsLoading(true);
      try {
        await handleLogin();
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleLogin = async () => {
    try {
      const response = await apiClient.post("/auth/login", formData);
      const data = await response.data;
      console.log(data);

      if (data.data.token_details.token) {
        localStorage.setItem("jwtToken", data.data.token_details.token);
        localStorage.setItem("vendorDetail", JSON.stringify(data.data.vendor_details));
        navigate("/dashboard");
      } else {
        alert("failed");
      }
    } catch (error) {
      setWrongError("Wrong email or password. Try again");
    }
  };

  return (
    <div className="mb-28">
      <div className="flex flex-col p-6">
        <h3 className="font-bold text-xl text-center tracking-tight">Login</h3>
      </div>
      <div className="p-6 pt-0">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <FormInput
              lableTitle="Email"
              labelvarient="m"
              inputvarient="m"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email ID ..."
            />
            {error.email && <Error>{error.email._errors[0]}</Error>}
          </div>
          <div className="space-y-1 mt-4">
            <PasswordFormInput
              lableTitle="Password"
              inputvarient="m"
              value={formData.password}
              onChange={handleChange}
              className="pr-52"
              placeholder="Type here ..."
            />
            <div className="w-64">{error.password && <Error>{error.password._errors[0]}</Error>}</div>
          </div>
          <div className="my-1">
            <a href="#">
              <span className="text-sm font-medium text-blue-900 hover:underline" onClick={handleClick}>
                Forgot Password?
              </span>
            </a>
          </div>
          {wrongError && <p className="text-sm font-medium text-red-600">{wrongError}</p>}
          <div className="flex items-center justify-center">
            <LoadingButton loading={isLoading}>Submit</LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
