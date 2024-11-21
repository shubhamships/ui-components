import { useState } from "react";
import { z } from "zod";
import BackGround from "../components/BackGround";

interface FormData {
  email: string;
  password: string;
}
export interface FormError {
  email?: { _errors: string[] };
  password?: { _errors: string[] };
}

const Home = () => {
  const [type, setType] = useState<"login" | "forgotPassword">("login");
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const [error, setError] = useState<FormError>({});

  const schema = z.object({
    email: z.string().email("Must be a valid email address"),
    password: z.string().min(6, "Password must be 6 or more characters long"),
  });
  const handleTypeChange = (newType: "login" | "forgotPassword") => {
    setType(newType);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    <BackGround
      type={type}
      handleTypeChange={handleTypeChange}
      handleDataChange={handleChange}
      handleDataSubmit={handleSubmit}
      formData={formData}
      error={error}
    />
  );
};
export default Home;
