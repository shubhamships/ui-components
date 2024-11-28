import ProfileUpdate from "./editAccount/ProfileUpdate";
import ChangePassword from "./editAccount/ChangePassword";
import { useState } from "react";

const EditAccount = () => {
  const vendorDetail = JSON.parse(localStorage.getItem("vendorDetail") || "{}");
  const [editPage, setEditPage] = useState("profile");

  return (
    <div>
      <div className="m-6 p-8 h-auto rounded-lg bg-gradient-to-r from-blue-900 to-blue-300">
        <h1 className="font-bold text-lg md:text-xl text-white">
          Welcome Back,<span className="text-orange-400"> {vendorDetail.firstname}!</span>
        </h1>
        <h3 className="text-white">Update your profile to showcase your best self and stay ahead.</h3>
      </div>
      <div className="m-6 bg-white rounded-lg p-8">
        <div>
          <ul className="flex gap-x-5 mb-10">
            <li
              className={`p-2 text-sm  font-semibold rounded-md cursor-pointer ${
                editPage === "profile" ? "bg-blue-900 text-white" : "border-blue-900 text-blue-900 border"
              }`}
              onClick={() => setEditPage("profile")}
            >
              Profile Update
            </li>
            <li
              className={`border p-2 text-sm font-semibold rounded-md cursor-pointer ${
                editPage === "password" ? "bg-blue-900 text-white" : "border-blue-900 text-blue-900 border"
              }`}
              onClick={() => setEditPage("password")}
            >
              Change Password
            </li>
          </ul>
          {editPage === "profile" ? <ProfileUpdate /> : <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
