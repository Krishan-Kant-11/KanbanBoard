import React from "react";
import CardComponent from "./Card";

import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Ticket = ({ ticket }) => {
  const { id, title, tag, userId, status, priority} = ticket;

  return (
    <CardComponent
      id={id}
      title={title}
      status={status}
      priority={priority}
      tag={tag}
      userId={userId}
    />
  );
};

export default Ticket;
