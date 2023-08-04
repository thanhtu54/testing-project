import { BellOutlined, UnorderedListOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="wrapper-header">
      <Link to="/">
        <img
          className="logo"
          src={require("../../assets/images/logo.png")}
          alt="logo"
        />
      </Link>
      <div className="action">
        <UnorderedListOutlined />
        <div className="notification">
          <BellOutlined />
          <div className="avatar">
            <img
              src="https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
              alt="avatar"
            />
            <span>hahahaha</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
