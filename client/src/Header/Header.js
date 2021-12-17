import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <ul>
        <li className="nav-Links">
          <Link to="/"> To do</Link>
        </li>
        <li className="nav-Links">
          <Link to="/calculator"> Calculator</Link>
        </li>
        <li className="nav-Links">
          <Link to="/Pomodoro"> Pomodoro </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
