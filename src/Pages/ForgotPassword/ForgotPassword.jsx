import React, { useState } from "react";
import { Input, Select } from "antd";
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
import { registerValidation } from "../../Utilis/Validations";
import { Alert } from "antd";
import { toast } from "react-toastify";

export default function Register() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userDetails, setUserDetails] = useState({
    email: "",
    role: searchParams.get("role") || "agent",
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const roleChange = (val) => {
    setUserDetails({ ...userDetails, role: val });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      true ||
      (registerValidation(userDetails, setError) &&
        Object.values(error).every((error) => error === ""))
    ) {
      const res = await makeRequest("/user/forgot-password", "post", {
        ...userDetails,
      });
      if (res.message === "An email was sent for your password reset.") {
        // setSent(true);
        toast.success(res.message);
      } else {
        toast.error(res?.response?.data?.message);
      }
    }
  };

  return (
    <div className="userDetails">
      <h1>Hello</h1>
      <p>Reset Password</p>
      {/* {sent && (
        <Alert
          message="An email was sent for your password reset."
          type="success"
          style={{ marginBottom: "20px" }}
        />
      )} */}
      <div className="inputOuter mb30">
        <Input
          placeholder="Email Address"
          name="email"
          type="email"
          onChange={(e) => handleChange(e)}
          value={userDetails.email}
          prefix={<EmailIcon />}
        />
        <span style={{ color: "red" }}>{error.email}</span>
      </div>
      <div className="inputOuter mb30">
        <Select
          name="role"
          value={userDetails.role}
          onChange={roleChange}
          className="selectBorderedCustom "
          placeholder={
            <span className="userIcon">
              <UserIconFilled />
              Account Type
            </span>
          }
          options={[
            {
              value: "broker-admin",
              label: "Broker administrator",
            },
            {
              value: "broker",
              label: "Broker of record",
            },
            {
              value: "agent",
              label: "Agent",
            },
            {
              value: "investor",
              label: "Investor",
            },
            {
              value: "referral",
              label: "Referral",
            },
          ]}
        />
      </div>
      <ButtonCustom
        label={"Forgot Password"}
        isDisable={sent}
        onClick={(e) => handleSubmit(e)}
      />
    </div>
  );
}
