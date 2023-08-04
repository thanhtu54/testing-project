import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const navigate = useNavigate();

  const items = [
    getItem("Dashboard", "1", <MailOutlined />),
    getItem("Account Management", "2", <AppstoreOutlined />, [
      getItem("Facility Account Management", "3"),
      getItem("Service Account Management", "4"),
      getItem("User Account Management", "5"),
    ]),
    getItem("Facility Management", "6", <MailOutlined />),
    getItem("Service Management", "7", <MailOutlined />),
    getItem("Booking Management", "8", <MailOutlined />),
    getItem("Notification Management", "9", <MailOutlined />),
    getItem("FAQ Management", "10", <MailOutlined />),
    getItem("Review Management", "11", <MailOutlined />),
  ];

  const onClick = (e) => {
    e?.key === "3" && navigate("/user/list");
    e?.key === "1" && navigate("/");
  };

  return (
    <div className="wrapper-navbar">
      <div className="menu">
        <Menu
          onClick={onClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
    </div>
  );
};

export default Navbar;
