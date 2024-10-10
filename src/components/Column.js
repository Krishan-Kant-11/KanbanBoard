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
  // Map numeric priorities to corresponding string values
  const titleMapping = {
    0: "No Priority",
    1: "Low Priority",
    2: "Medium Priority",
    3: "High Priority",
    4: "Urgent Priority",
    "Backlog": "Backlog",
    "Todo": "Todo",
    "In progress": "In progress"
  };

  // Use mapped title if numeric
  const displayTitle = titleMapping[title] || title;

  return (
    <div className="boardColumn">
      <div className="board-top">
        {displayTitle === "Backlog" && (
          <>
            <img src={Backlog} alt="Backlog" />
            <span className="board-text">
              <p>Backlog</p>
              <span>
                <img src={add} alt="add" />
                <img src={dot_menu} alt="menu" />
              </span>
            </span>
          </>
        )}
        {displayTitle === "Todo" && (
          <>
            <img src={Todo} alt="Todo" />
            <span className="board-text">
              <p>Todo</p>
              <span>
                <img src={add} alt="add" />
                <img src={dot_menu} alt="menu" />
              </span>
            </span>
          </>
        )}
        {displayTitle === "In progress" && (
          <>
            <img src={In_progress} alt="In progress" />
            <span className="board-text">
              <p>In progress</p>
              <span>
                <img src={add} alt="add" />
                <img src={dot_menu} alt="menu" />
              </span>
            </span>
          </>
        )}
        {displayTitle === "No Priority" && (
          <>
            <img src={no_priority} alt="No Priority" />
            <span className="board-text">
              <p>No Priority</p>
              <span>
                <img src={add} alt="add" />
                <img src={dot_menu} alt="menu" />
              </span>
            </span>
          </>
        )}
        {displayTitle === "Low Priority" && (
          <>
            <img src={low_priority} alt="Low Priority" />
            <span className="board-text">
              <p>Low Priority</p>
              <span>
                <img src={add} alt="add" />
                <img src={dot_menu} alt="menu" />
              </span>
            </span>
          </>
        )}
        {displayTitle === "Medium Priority" && (
          <>
            <img src={mid_priority} alt="Medium Priority" />
            <span className="board-text">
              <p>Medium Priority</p>
              <span>
                <img src={add} alt="add" />
                <img src={dot_menu} alt="menu" />
              </span>
            </span>
          </>
        )}
        {displayTitle === "High Priority" && (
          <>
            <img src={high_priority} alt="High Priority" />
            <span className="board-text">
              <p>High Priority</p>
              <span>
                <img src={add} alt="add" />
                <img src={dot_menu} alt="menu" />
              </span>
            </span>
          </>
        )}
        {displayTitle === "Urgent Priority" && (
          <>
            <img src={urgent_priority} alt="Urgent Priority" />
            <span className="board-text">
              <p>Urgent Priority</p>
              <span>
                <img src={add} alt="add" />
                <img src={dot_menu} alt="menu" />
              </span>
            </span>
          </>
        )}
      </div>

      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;

