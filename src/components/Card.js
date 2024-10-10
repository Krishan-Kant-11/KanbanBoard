// Card.js
import React from "react";
import { Card } from "antd";

import no_priority from "../assets/No-priority.svg"
import low_priority from "../assets/Img - Low Priority.svg"
import mid_priority from "../assets/Img - Medium Priority.svg"
import high_priority from "../assets/Img - High Priority.svg"
import urgent_priority from "../assets/SVG - Urgent Priority grey.svg"

import "./Card.css"



function CardComponent({ id, title, tag, userId, status, priority}) {
  return (
    <Card className="card">

      <div className="card-head">
        <p>{id}</p>

      </div>

      <div className="card-body">
        <p>{title}</p>
      </div>

      <div className="card-bottom">
        <span className="card-priority">
          {priority===0 && <img src={no_priority} alt="img"/>}
          {priority===1 && <img src={low_priority} alt="img"/>}
          {priority===2 && <img src={mid_priority} alt="img"/>}
          {priority===3 && <img src={high_priority} alt="img"/>}
          {priority===4 && <img src={urgent_priority} alt="img"/>}
        </span>
        <p>{tag}</p>
      </div>

    </Card>
  );
}

export default CardComponent;
