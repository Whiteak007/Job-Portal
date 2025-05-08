// Path: src/components/Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>jobsphere</h1>
      <div className="nav-links">
        <a href="/jobs">Jobs</a>
        <a href="/profile">Profile</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
