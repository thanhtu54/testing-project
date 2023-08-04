import { Select } from "antd";

import "./Select.scss";

export const SelectCommon = ({ placeholder, value, onChange, options }) => {
  return (
    <div className="wrapper-select">
      <Select
        placeholder={placeholder}
        value={value}
        allowClear
        onChange={onChange}
        options={options}
      />
    </div>
  );
};
