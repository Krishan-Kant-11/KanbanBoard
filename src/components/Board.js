import React, { useState, useEffect } from "react";
import { fetchTickets } from "./apifetch";
import Column from "./Column";
import { Select } from "antd";
import "antd/dist/reset.css";
import "./Board.css";

const { Option } = Select;

const KanbanBoard = ({ isDisplayOpen }) => {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState(
    localStorage.getItem("groupingOption") || "status"
  );
  const [sortedBy, setSortedBy] = useState(
    localStorage.getItem("sortedBy") || "priority"
  );

  useEffect(() => {
    async function fetchData() {
      const data = await fetchTickets();
      setTickets(data.tickets);
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("groupingOption", groupingOption);
  }, [groupingOption]);

  useEffect(() => {
    localStorage.setItem("sortedBy", sortedBy);
  }, [sortedBy]);

  const groupTicketsByOption = (tickets, option) => {
    const groupedTickets = {};

    tickets.forEach((ticket) => {
      const key =
        option === "status"
          ? ticket.status
          : option === "user"
          ? ticket.user
          : ticket.priority;
      if (!groupedTickets[key]) {
        groupedTickets[key] = [];
      }
      groupedTickets[key].push(ticket);
    });

    return groupedTickets;
  };

  const sortTicketsByOption = (groupedTickets, option) => {
    const sortedTickets = {};

    Object.keys(groupedTickets).forEach((groupTitle) => {
      const group = groupedTickets[groupTitle];
      sortedTickets[groupTitle] =
        option === "priority"
          ? group.sort((a, b) => b.priority - a.priority)
          : group.sort((a, b) => a.title.localeCompare(b.title));
    });

    return sortedTickets;
  };

  const groupedTickets = groupTicketsByOption(tickets, groupingOption);
  const sortedTickets = sortTicketsByOption(groupedTickets, sortedBy);

  return (
    <div className="kanban-board">
      {isDisplayOpen && (
        <div className="options-wrapper">
          <div className="options">
            <div className="options-box">
            <span>Grouping</span>
            <Select
              value={groupingOption}
              onChange={(value) => setGroupingOption(value)}
              style={{ width: '100%' }}
            >
              <Option value="status">Status</Option>
              <Option value="user">User</Option>
              <Option value="priority">Priority</Option>
            </Select>
            </div>
            <div className="options-box">
            <span>Ordering</span>
            <Select
              value={sortedBy}
              onChange={(value) => setSortedBy(value)}
              style={{ width: '100%' }}
            >
              <Option value="priority">Priority</Option>
              <Option value="title">Title</Option>
            </Select>
            </div>
          </div>
        </div>
      )}
      <div className="board-columns">
        {Object.keys(sortedTickets).map((groupTitle) => (
          <Column
            key={groupTitle}
            title={groupTitle}
            tickets={sortedTickets[groupTitle]}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;