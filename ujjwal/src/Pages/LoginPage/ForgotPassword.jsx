import React from "react";
import InputField from "../../Components/InputField";
import Error from "../../Components/Errors";
import Button from "../../Components/button";

function ForgotPassword({ onBackToLogin, handleSubmit, error }) {
  return (
    <div>
      <div className="flex items-center justify-center text-sm">
        <div className="rounded-lg max-w-md w-full">
          <div className="p-6">
            <h1 className="text-xl font-semibold text-center">Forgot Your Password?</h1>
          </div>
          <form onSubmit={handleSubmit} className="pl-6 pr-6 mb-36">
            <p className="text-center">
              Enter email address associated with your account and you will receive an email to reset your password.
            </p>
            <div className="space-y-1 mt-5">
              <InputField
                isRequired
                type="email"
                placeholder="Enter Email ID . . ."
                className="h-10 w-full px-3 py-2 border border-gray-300 rounded-md"
                label={"Email"}
              />
            </div>
            <Error errors={error.email && error.email._errors[0]} className="mt-1" />
            <div className="mt-11">
              <Button>Submit</Button>
            </div>
            <div className="mt-5">
              <div
                className="text-blue-900 font-medium hover:underline flex item-center text-base justify-center"
                onClick={onBackToLogin}
              >
                Return to Login
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
