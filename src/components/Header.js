import React from 'react';
import './Header.css';
import display from "../assets/Display.svg";
import down from "../assets/down.svg";
import up from "../assets/down.svg";

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <header className="header">
      <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={display} alt="Display icon" />
        <span>Display</span>
        <span className="arrow">
          <img src={isOpen ? up : down} alt={isOpen ? "Close menu" : "Open menu"} />
        </span>
      </div>
    </header>
  );
};

export default Header;