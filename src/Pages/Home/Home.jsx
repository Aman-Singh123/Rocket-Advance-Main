import React, { useEffect } from "react";
import "./Home.scss";
import "../Login/Login.scss";
import { UserOutlined } from "../../StoreImages/StoreImage";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Utilis/Constent";
const Home = () => {
  const navigate = useNavigate();
  const data = [
    {
      role: "an agent",
      href: routes.Agent,
    },
    {
      role: "a broker of record",
      href: `${routes.Broker}/?role=broker`,
    },
    {
      role: "a broker administrator",
      href: `${routes.Broker}/?role=broker-admin`,
    },
    // {
    //   role: "an investor",
    //   href: routes.Investor,
    // },
    {
      role: " a referral partner",
      href: routes.Referral,
    },
  ];
  useEffect(() => {
    document.body.classList.add("landing");
    return () => {
      document.body.classList.remove("landing");
    };
  }, []);

  return (
    <div className="userDetails">
      <h1>Login</h1>
      <p style={{ marginBottom: 24 }}>Please select your account</p>
      <div className="userSelection">
        {data.map((ele, index) => (
          <a className="userSelection_cards" href={ele.href}>
            <UserOutlined />
            <span>I am {ele.role} </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
