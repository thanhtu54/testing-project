import { EyeOutlined } from "@ant-design/icons";
import { AutoComplete, Form, Table, Tag, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../api/getUsers";
import ButtonPrimary from "../../commons/buttonPrimary/ButtonPrimary";
import { SelectCommon } from "../../commons/select/Select";

import "./List.scss";

const List = () => {
  const { Title } = Typography;
  const [area, setArea] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const [areaValue, setAreaValue] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setData(res?.data);
      setDataSearch(res?.data);
      setAreaValue(
        res?.data?.map((value) => {
          return {
            value: value?.address,
            label: value?.address,
          };
        })
      );
    });
  }, []);

  const handleClick = (id) => {
    setDataSearch(
      dataSearch?.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const navigate = useNavigate();

  const onFinish = (values) => {
    const filterData = data?.filter((value) => {
      return value?.facilityName.includes(values?.name);
    });
    const searchSelect = (data) => {
      if (!values?.area && !values?.status) {
        setDataSearch(data);
      } else {
        if (!values?.area) {
          setDataSearch(
            data?.filter((value) => {
              return value?.status === values?.status;
            })
          );
        } else {
          setDataSearch(
            data?.filter((e) => {
              if (e?.address === values?.area) {
                if (!values?.status) {
                  return e;
                } else if (e?.status === values?.status) {
                  return e;
                } else {
                  return null;
                }
              } else {
                return null;
              }
            })
          );
        }
      }
    };
    if (!values?.name) {
      searchSelect(data);
    } else if (filterData?.length !== 0) {
      searchSelect(filterData);
    } else {
      setDataSearch([]);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const dataValue = [
    {
      value: "New Register",
      label: "New Register",
    },
    {
      value: "Issued",
      label: "Issued",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Facility Name",
      dataIndex: "facilityName",
      key: "facilityName",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Manager/Staff Name",
      dataIndex: "staffName",
      key: "staffName",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, status) => {
        let color = status?.status === "New Register" ? "#f76f6f" : "#ebbb37";
        return <Tag color={color}>{status?.status}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, index) => {
        return (
          <div>
            <EyeOutlined onClick={() => handleClick(index.id)} />
          </div>
        );
      },
    },
  ];

  const onChange = (event) => {
    const dataFilter = data?.filter((item) => {
      return item?.facilityName?.toUpperCase().includes(event?.toUpperCase());
    });
    setOptions(
      dataFilter.map((data) => {
        return { value: data?.facilityName };
      })
    );
  };

  const onSelect = (e) => {
    const filterSelect = data?.filter((item) => {
      if (item?.facilityName.includes(e)) {
        return item?.address;
      } else return null;
    });
    console.log(filterSelect);
    const xxx = filterSelect?.map((item) => {
      return {
        label: item?.address,
        value: item?.address,
      };
    });
    setAreaValue(xxx);
  };

  const handleClear = () => {
    setAreaValue(
      data?.map((value) => {
        return {
          value: value?.address,
          label: value?.address,
        };
      })
    );
  };

  return (
    <div className="wrapper-list">
      <div className="wrapper-title">
        <Title level={3}>Create Facility Account</Title>
        <ButtonPrimary
          name="Create Account"
          onClick={() => {
            navigate("/user/register");
          }}
        />
      </div>
      <div className="wrapper-search">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Facility Name" name="name">
            <AutoComplete
              options={options}
              allowClear
              onClear={handleClear}
              onChange={onChange}
              onSelect={onSelect}
              placeholder="Enter facility name"
            />
          </Form.Item>
          <Form.Item label="Area" name="area">
            <SelectCommon
              placeholder="Select an area"
              value={area}
              allowClear
              onChange={(e) => {
                setArea(e);
              }}
              options={areaValue}
            />
          </Form.Item>
          <Form.Item label="Status" name="status">
            <SelectCommon
              placeholder="Select a status"
              value={status}
              allowClear
              onChange={(e) => {
                setStatus(e);
              }}
              options={dataValue}
            />
          </Form.Item>
          <div className="wrapper-button">
            <Form.Item>
              <ButtonPrimary name="Search" htmlType="submit" />
            </Form.Item>
          </div>
        </Form>
      </div>
      <div className="wrapper-table">
        <Table
          columns={columns}
          dataSource={dataSearch}
          rowKey={(dataSearch) => dataSearch.id}
        />
      </div>
    </div>
  );
};

export default List;
