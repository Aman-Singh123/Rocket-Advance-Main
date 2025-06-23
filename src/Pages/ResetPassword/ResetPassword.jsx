import React, { useState } from "react";
import { Alert, Input, Select } from "antd";
import { jwtDecode } from "jwt-decode";
import "../Login/Login.scss";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import { Link, useSearchParams } from "react-router-dom";
import {
  EmailIcon,
  LockIcon,
  UserIcon,
  UserIconFilled,
} from "../../StoreImages/StoreImage";
import makeRequest from "../../Api/makeRequest";
import { useNavigate } from "react-router-dom/dist";
import { registerValidation, resetValidation } from "../../Utilis/Validations";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  const user = jwtDecode(token);
  const [userDetails, setUserDetails] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
    resetValidation({ ...userDetails, [name]: value }, setError)
    // setError({ ...error, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      resetValidation(userDetails, setError) &&
      Object.values(error).every((error) => error === "")
    ) {
      const { message } = await makeRequest("/user/reset-password", "post", {
        password: userDetails.password,
        token,
      });
      if (message === "Password reset successfully.") {
        toast.success(message);
        navigate("/");
      }
    }
  };
  return (
    <div className="userDetails">
      <h1>Hello</h1>
      <p>Reset Password</p>

      <div className="inputOuter mb30">
        <Input
          placeholder="Email Address"
          name="email"
          type="email"
          value={user?.email}
          prefix={<EmailIcon />}
          disabled={true}
        />
      </div>

      <div className="inputOuter mb30">
        <Input
          placeholder="New Password"
          name="password"
          type="password"
          onChange={(e) => handleChange(e)}
          value={userDetails.password}
          prefix={<LockIcon />}
        />
        <span style={{ color: "red" }}>{error.password}</span>
      </div>
      <div className="inputOuter mb30">
        <Input
          placeholder="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={(e) => handleChange(e)}
          value={userDetails.confirmPassword}
          prefix={<LockIcon />}
        />
        <span style={{ color: "red" }}>{error.confirmPassword}</span>
      </div>

      <ButtonCustom label={"Reset"} onClick={(e) => handleSubmit(e)} />
    </div>
  );
}
