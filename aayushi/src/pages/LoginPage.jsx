import { useState } from "react";
import { z } from "zod";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { ForgotPassword } from "./ForgotPassword";
import {Error} from "../components/Error";
import { Api } from "./Api";

import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const schema = z.object({
    email: z.string().email("Must be a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  const [passwordPage, setPasswordPage] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
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

    if (!result.success) {
      const errorMessages = {};
      result.error.errors.forEach((err) => {
        errorMessages[err.path[0]] = err.message;
      });
      setError(errorMessages);
      return;
    }

    setLoading(true);
    setShowError(false);

    try {
      const res = await Api(data.email, data.password);

      const token = res.data.token_details.token;
      if (token) {
        localStorage.setItem("jwtToken", token);
        navigate("/blank");
      } else {
        setShowError(true);
      }
    } catch (error) {
      setShowError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                 <Error message={error.email} />
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
                    className="w-full pr-48"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 cursor-pointer top-1/2 transform -translate-y-1/2 "
                  >
                    <i
                      className={`fa ${
                        showPassword ? "fa-eye" : "fa-eye-slash"
                      }`}
                    />
                  </span>
                </div>
                <Error message={error.password} />
              </div>
              <div>
                <span
                  className="text-sm font-medium text-blue-800 hover:underline cursor-pointer"
                  onClick={handlePasswordPageToggle}
                >
                  Forgot Password?
                </span>
              </div>

              {showError && (
                <p className="text-red-500 text-xs font-medium my-4">
                  Wrong email or password. Try again
                </p>
              )}

              <div className="flex items-center justify-center mb-20">
                <Button loading={loading} type={"Submit"} />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <ForgotPassword setPassword={handlePasswordPageToggle} />
      )}
    </div>
  );
};
