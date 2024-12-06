import { Label } from "../components/Label";
import Required from "../components/Required";
import { Input } from "../components/Input";
const LoginPage = () => {
  return (
    <form action="">
      <div className="flex flex-col space-y-1 ">
        <div className="flex items-start">
          <Label type="Email" />
          <Required />
        </div>
        <Input type="email" name="email" className="w-96" placeholder="Enter Email ID ..." />
      </div>
      <div className="space-y-1 mt-4">
        <div className="flex items-start">
          <Label type="Password" />
          <Required />
        </div>
        <div className="flex items-end relative">
          <Input type="text" name="password" placeholder="Type here ..." className="w-96" />
        </div>
      </div>
      <div className="my-1">
        <a href="#">
          <span className="text-sm font-medium text-blue-900 hover:underline">Forgot Password?</span>
        </a>
      </div>
    </form>
  );
};
export default LoginPage;
