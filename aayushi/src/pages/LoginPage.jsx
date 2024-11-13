import { useState } from "react";
import { z } from "zod";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { ForgotPassword } from "./ForgotPassword";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate(); 
  const schema = z.object({
    email: z.string().email("Must be a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  const [passwordPage, setPasswordPage] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handlePasswordPageToggle = () => {
    setPasswordPage(!passwordPage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = schema.safeParse(data);

    if (result.success) {
      console.log("Form data is valid:", data);

      try {
        const res = await axios.post(
          "https://api.fr.stg.shipglobal.in/public/api/v1/auth/login",
          {
            email: data.email,
            password: data.password,
          },
          {
            headers: {
              "content-type": "application/json",
              accept: "application/json",
            },
          }
        );

        const APIData = await res.data;
        console.log(APIData);

        const token = APIData.data.token_details.token;
        if (token) {
          localStorage.setItem("jwtToken", token);
          console.log("Login successful");
          navigate("/blank");
        } else {
          console.log("No token received");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }

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
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-lg shadow-lg m-4 p-3 w-full max-w-md mb-18 lg:mb-32 h-128 bg-white">
        {passwordPage ? (
          <div>
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="font-semibold text-xl text-center">Login</h2>
            </div>
            <div className="p-6 pt-0">
              <form onSubmit={handleSubmit}>
                <div>
                  <Label type="Email" />
                  <Input
                    type="email"
                    placeholder="Enter Email ID..."
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                  {error.email && (
                    <p className="text-red-500 text-xs font-medium">
                      {error.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label type="Password" />
                  <div className="flex items-end relative w-full mb-1.5">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={data.password}
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      className="w-full pr-[200px]"
                    />
                    <img
                      src="src/assets/icon.svg"
                      alt="eye icon"
                      className="w-5 h-5 text-current bold absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                  {error.password && (
                    <p className="text-red-500 text-xs font-medium">
                      {error.password}
                    </p>
                  )}
                </div>

                <div>
                  <span
                    className="text-sm font-medium text-blue-800 hover:underline cursor-pointer"
                    onClick={handlePasswordPageToggle}
                  >
                    Forgot Password?
                  </span>
                </div>

                <div className="flex items-center justify-center mb-20">
                  <Button>Login</Button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <ForgotPassword setPassword={handlePasswordPageToggle} />
        )}
      </div>
    </div>
  );
};
