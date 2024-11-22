import { Label } from "../components/Label";
import Button from "../components/Button";
import { Input } from "../components/Input";
import Required from "../components/Required";
import { FormError } from "../pages/Home";

interface ForgotPasswordProps {
  handleTypeChange: (newType: "login" | "forgotPassword") => void;
  formData: { email: string; password: string };
  error: FormError;
  handleDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDataSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Forgotpassword = ({
  handleTypeChange,
  handleDataChange,
  handleDataSubmit,
  formData,
  error,
}: ForgotPasswordProps) => {
  return (
    <div className="pb-4">
      <p className="pt-2 px-6 text-sm text-center">
        Enter email address associated with your account and you will receive an email to reset your password.
      </p>
      <div className="p-6 pt-6">
        <form action="" onSubmit={handleDataSubmit}>
          <div className="flex flex-col space-y-1 ">
            <div className="flex items-start">
              <Label type="Email" />
              <Required />
            </div>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleDataChange}
              placeholder="Enter Email ID ..."
            />
            {error.email && <p className="text-xs font-semibold text-red-600">{error.email._errors[0]}</p>}
          </div>
          <div className="flex items-center justify-center">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
      <div className="font-medium text-center">
        <a href="#">
          <span className="text-blue-800 hover:underline" onClick={() => handleTypeChange("login")}>
            Return to login
          </span>
        </a>
      </div>
    </div>
  );
};
export default Forgotpassword;
