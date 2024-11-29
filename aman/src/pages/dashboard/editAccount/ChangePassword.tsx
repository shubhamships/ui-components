import apiClient from "@/api/ApiClient";
import Button from "@/components/Button";
import PasswordFormInput from "@/components/PasswordFormInput";
import { useState } from "react";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [devicesLogout, setDevicesLogout] = useState("0");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage("Password is not matching");
      return;
    }
    console.log("checl");
    try {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      const response = await apiClient.post(
        "/auth/change-password",
        {
          password: newPassword,
          current_password: password,
          logout_all_devices: devicesLogout,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.status === 200) {
        setSuccessMessage(response.data.message || "Password changed successfully!");
        setErrorMessage("");
        setPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <form className="md:grid grid-cols-2 gap-8" onSubmit={handleSubmit}>
        <PasswordFormInput
          lableTitle="Old Password"
          value={password}
          inputvarient="lg"
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordFormInput
          lableTitle="New Password"
          value={newPassword}
          inputvarient="lg"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <PasswordFormInput
          lableTitle="Confirm Password"
          value={confirmPassword}
          inputvarient="lg"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div></div>
        <div className="flex flex-wrap gap-x-4">
          <Button type="submit" title="Change Password" size="lg" className="mt-5" />
          <Button title="Forgot Password" size="lg" variant="destructive" className="mt-5" />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
