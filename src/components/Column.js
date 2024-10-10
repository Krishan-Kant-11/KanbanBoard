import React from "react";
import Ticket from "./Ticket";
import "./Column.css";

import Backlog from "../assets/Backlog.svg"
import Todo from "../assets/To-do.svg"
import In_progress from "../assets/in-progress.svg"
import dot_menu from "../assets/3 dot menu.svg"
import add from "../assets/add.svg"
import no_priority from "../assets/No-priority.svg"
import low_priority from "../assets/Img - Low Priority.svg"
import mid_priority from "../assets/Img - Medium Priority.svg"
import high_priority from "../assets/Img - High Priority.svg"
import urgent_priority from "../assets/SVG - Urgent Priority colour.svg"

const Column = ({ title, tickets }) => {
  console.log(title);
  return (
    <div className="boardColumn">
      <div className="board-top">
        {title==="Backlog" && <><img src={Backlog} alt="img"/><span className="board-text"><p>Backlog</p><span><img src={add} alt="img"></img><img src={dot_menu} alt="img"></img></span></span></>}
        {title==="Todo" && <><img src={Todo} alt="img"/><span className="board-text"><p>Todo</p><span><img src={add} alt="img"></img><img src={dot_menu} alt="img"></img></span></span></>}
        {title==="In progress" && <><img src={In_progress} alt="img"/><span className="board-text"><p>In progress</p><span><img src={add} alt="img"></img><img src={dot_menu} alt="img"></img></span></span></>}
        {title===0 && <><img src={no_priority} alt="img"/><span className="board-text"><p>No Priority</p><span><img src={add} alt="img"></img><img src={dot_menu} alt="img"></img></span></span></>}
        {title===1 && <><img src={low_priority} alt="img"/><span className="board-text"><p>LowPriority</p><span><img src={add} alt="img"></img><img src={dot_menu} alt="img"></img></span></span></>}
        {title===2 && <><img src={mid_priority} alt="img"/><span className="board-text"><p>Medium Priority</p><span><img src={add} alt="img"></img><img src={dot_menu} alt="img"></img></span></span></>}
        {title===3 && <><img src={high_priority} alt="img"/><span className="board-text"><p>High Priority</p><span><img src={add} alt="img"></img><img src={dot_menu} alt="img"></img></span></span></>}
        {title===4 && <><img src={urgent_priority} alt="img"/><span className="board-text"><p>Urgent Priority</p><span><img src={add} alt="img"></img><img src={dot_menu} alt="img"></img></span></span></>}
        
      </div>

      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;
