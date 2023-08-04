import React from "react";
import { Button } from "antd";
import "./ButtonCancel.scss";

const ButtonCancel = ({ name, handleClick }) => {
  return (
    <div className="wrapper-button">
      <Button onClick={handleClick}>{name}</Button>
    </div>
  );
};

export default ButtonCancel;
