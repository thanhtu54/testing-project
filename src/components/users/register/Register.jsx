import { Form, Input, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUser } from "../../../api/postUsers";
import { regex } from "../../../constants/Index";
import ButtonCancel from "../../commons/buttonCancel/ButtonCancel";
import ButtonPrimary from "../../commons/buttonPrimary/ButtonPrimary";
import ModalCommon from "../../commons/modal/ModalCommon";
import { SelectCommon } from "../../commons/select/Select";

import "./Register.scss";

const Register = () => {
  const { Title } = Typography;
  const [role, setRole] = useState("manager");
  const [status, setStatus] = useState("issued");
  const [controlModal, setControlModal] = useState(false);
  const [controlCancel, setControlCancel] = useState(false);

  const onFinish = (values) => {
    postUser({
      facilityName: values.name,
      phoneNumber: values.phone,
      registerNumber: values.registerNumber,
      staffNumber: values.staffNumber,
      description: values.description,
      address: values.address,
      licenseQualification: values.qualification,
      staffName: values.staff,
      email: values.email,
      status: values.status,
      role: values.role,
    }).then((res) => {
      console.log(res);
      setControlModal(true);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    setControlCancel(true);
  };

  const handleHideCancel = () => {
    setControlCancel(false);
  };

  const handleHideModal = () => {
    setControlModal(false);
    navigate("/user/list");
  };

  return (
    <>
      <div className="wrapper-register">
        <Title level={3}>Create Facility Account</Title>
        <Title level={4}>Facility Account Information</Title>
        <div className="wrapper-form">
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
            <div className="wrapper-input">
              <div>
                <Form.Item
                  label="Facility Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Enter facility name",
                    },
                    {
                      pattern: regex.REGEX_NAME,
                      message: "Enter valid name",
                    },
                  ]}
                >
                  <Input placeholder="Enter facility name" />
                </Form.Item>
                <Form.Item
                  label="Phone Number"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Enter phone number",
                    },
                    {
                      pattern: regex.REGEX_PHONE,
                      message: "Enter valid phone",
                    },
                  ]}
                >
                  <Input placeholder="Enter phone number" />
                </Form.Item>
                <Form.Item
                  label="Bussiness Registation Number"
                  name="registerNumber"
                  rules={[
                    {
                      required: true,
                      message: "Enter Bussiness Registation Number",
                    },
                  ]}
                >
                  <Input placeholder="Enter Bussiness Registation Number" />
                </Form.Item>
                <Form.Item
                  label="Manage/Staff Phone Number"
                  name="staffNumber"
                  rules={[
                    {
                      required: true,
                      message: "Enter Manage/Staff Number",
                    },
                  ]}
                >
                  <Input placeholder="Enter Bussiness Manage/Staff Number" />
                </Form.Item>
                <Form.Item
                  label="Role"
                  name="role"
                  rules={[
                    {
                      required: true,
                      message: "Select role",
                    },
                  ]}
                >
                  <SelectCommon
                    placeholder="Select Role"
                    value={role}
                    onChange={(e) => {
                      setRole(e);
                    }}
                    options={[
                      {
                        value: "Manager",
                        label: "Manager",
                      },
                      {
                        value: "Staff",
                        label: "Staff",
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="Description" name="description">
                  <Input placeholder="Enter description" />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Enter address",
                    },
                  ]}
                >
                  <Input placeholder="Enter address" />
                </Form.Item>

                <Form.Item
                  label="Lience Qualification"
                  name="qualification"
                  rules={[
                    {
                      required: true,
                      message: "Enter Lience Qualification!",
                    },
                  ]}
                >
                  <Input placeholder="Enter lience qualification" />
                </Form.Item>

                <Form.Item
                  label="Manage/Staff Name"
                  name="staff"
                  rules={[
                    {
                      required: true,
                      message: "Enter Manage/Staff name",
                    },
                  ]}
                >
                  <Input placeholder="Enter Manage/Staff name" />
                </Form.Item>

                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Enter Email Address",
                    },
                    {
                      pattern: regex.REGEX_EMAIL,
                      message: "Enter valid email",
                    },
                  ]}
                >
                  <Input placeholder="Enter email address" />
                </Form.Item>

                <Form.Item
                  label="Status"
                  name="status"
                  rules={[
                    {
                      required: true,
                      message: "Select status",
                    },
                  ]}
                >
                  <SelectCommon
                    placeholder="Select Status"
                    value={status}
                    onChange={(e) => setStatus(e)}
                    options={[
                      {
                        value: "Issued",
                        label: "Issued",
                      },
                      {
                        value: "New Register",
                        label: "New Register",
                      },
                    ]}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="wrapper-button">
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <ButtonCancel handleClick={handleCancel} name="Cancel" />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <ButtonPrimary htmlType="submit" name="Create" />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
      <ModalCommon
        title="Register Notification"
        content="Register Successfully!"
        okText="Confirm"
        cancelText="Cancel"
        hideModal={handleHideModal}
        okModal={handleHideModal}
        open={controlModal}
      />
      <ModalCommon
        title="Register Notification"
        content="You are registering an account. Do you want to cancel this?"
        okText="Confirm"
        cancelText="Cancel"
        hideModal={handleHideCancel}
        okModal={handleHideModal}
        open={controlCancel}
      />
    </>
  );
};

export default Register;
