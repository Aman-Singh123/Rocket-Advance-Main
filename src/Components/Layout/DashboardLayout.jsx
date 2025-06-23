import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import useCurrentWidth from "../../CustomHooks/useCurrentWidth/useCurrentWidth.jsx";
import Logo from "../../Asset/LogoMainColored.svg";
import LogoMob from "../../Asset/RLogoColored.svg";
import {
  DashboardIcon,
  DocumentsIcon,
  LogoutIcon,
  MyDeals,
  MenuIcon,
  NewDeals,
} from "../../StoreImages/StoreImage.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
import { isLogged } from "../../Api/makeRequest.js";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const width = useCurrentWidth();
  const location = useLocation();
  const pathname = location.pathname;
  const { Sider, Content } = Layout;
  return (
    <div className={`mainLayout ${width < 767 ? "responsiveLayout" : ""}`}>
      <Layout>
        <Sider collapsed={(width < 767 && true) || (width > 767 && collapsed)}>
          <div className="logo">
            {width > 767 ? (
              <img src={Logo} alt="Logo" />
            ) : (
              <span
                onClick={() => {
                  setCollapsed(!collapsed);
                }}
              >
                <MenuIcon />
              </span>
            )}
          </div>
          <Menu
            className={collapsed === true ? "collapsed" : ""}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[
              (pathname === "/dashboard" && "dashboard") ||
                (pathname === "/my-deals" && "myDeals") ||
                (pathname === "/new-deals" && "newdeals") ||
                (pathname === "/documents" && "documents"),
            ]}
            items={[
              {
                key: "dashboard",
                icon: (
                  <span>
                    <Link to={"/dashboard"}>
                      <DashboardIcon />
                    </Link>
                  </span>
                ),
                label: (
                  <span>
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </span>
                ),
              },
              {
                key: "myDeals",
                icon: (
                  <span>
                    <Link to={"/my-deals"}>
                      <MyDeals />
                    </Link>
                  </span>
                ),
                label: (
                  <span>
                    <Link to={"/my-deals"}>My Deals</Link>
                  </span>
                ),
              },
              {
                key: "newdeals",
                icon: (
                  <span>
                    <Link to={"/new-deals"}>
                      <NewDeals />
                    </Link>
                  </span>
                ),
                label: (
                  <span>
                    <Link to={"/new-deals"}>New Deals</Link>
                  </span>
                ),
              },
              {
                key: "documents",
                icon: (
                  <span>
                    <Link to={"/documents"}>
                      <DocumentsIcon />
                    </Link>
                  </span>
                ),
                label: (
                  <span>
                    <Link to={"/documents"}>Documents</Link>
                  </span>
                ),
              },
              {
                key: "blank1",

                label: "",
              },
              {
                key: "logout",
                icon: (
                  <span
                    onClick={() => {
                      isLogged(navigate);
                    }}
                  >
                    <LogoutIcon />
                  </span>
                ),
                label: (
                  <span>
                    <div
                      onClick={() => {
                        isLogged(navigate);
                      }}
                    >
                      Logout
                    </div>
                  </span>
                ),
              },
              {
                key: "blank2",

                label: <ContactUs />,
              },
            ]}
          />
        </Sider>

        <Layout className="site-layout">
          <Header />
          <Content className={"content"}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
