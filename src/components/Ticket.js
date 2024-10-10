import React from "react";
import CardComponent from "./Card";


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
