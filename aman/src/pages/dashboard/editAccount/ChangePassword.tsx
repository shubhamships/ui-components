import Button from "@/components/Button";
import PasswordFormInput from "@/components/PasswordFormInput";

const ChangePassword = () => {

  // const handleSubmit =async(e:any)=>{
  //     e.preventDefault();
  //   try{
      
  //   }
  // }
  return (
    <div>
      <form  className="md:grid grid-cols-2 gap-8">
        <PasswordFormInput lableTitle="Old Password" inputvarient="lg" />
        <PasswordFormInput lableTitle="New Password" inputvarient="lg" />
        <PasswordFormInput lableTitle="Confirm Password" inputvarient="lg" />
        <div></div>
        <div className="flex gap-x-4">
          <Button title="Change Password" size="lg" className="mt-5" />
          <Button title="Forgot Password" size="lg" variant="destructive" className="mt-5" />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
