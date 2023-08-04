import { Button } from "antd";
import React from "react";

import "./ButtonPrimary.scss";

const ButtonPrimary = ({ name, htmlType, onClick }) => {
  return (
    <div className="wrapper-primary">
      <Button type="primary" htmlType={htmlType} onClick={onClick}>
        {name}
      </Button>
    </div>
  );
};

export default ButtonPrimary;
