import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContex } from "../../App";
import "./Navbar.css";

const Navbar = () => {
  const { currUser, setCurrUser } = useContext(UserContex);
  return (
    <header>
      <div className="brand">{currUser}</div>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
      </ul>
      <div
        className="user-container"
        onClick={() => {
          setCurrUser(null);
        }}
      >
        <div className="logo">
          <i className="fas fa-user"></i>
        </div>
        <span style={{ color: "#fff", fontWeight: "500" }}>Log out</span>
      </div>
    </header>
  );
};

export default Navbar;
