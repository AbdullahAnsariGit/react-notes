import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", borderBottom: "1px solid gray" }}>
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
        Home
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
        About
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
