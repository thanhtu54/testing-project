import { Modal } from "antd";
import React from "react";

import "./ModalCommon.scss";

const ModalCommon = ({
  open,
  hideModal,
  okText,
  cancelText,
  content,
  title,
  okModal,
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onOk={okModal}
      onCancel={hideModal}
      okText={okText}
      cancelText={cancelText}
      centered
      className="modal-style"
    >
      <p>{content}</p>
    </Modal>
  );
};

export default ModalCommon;
