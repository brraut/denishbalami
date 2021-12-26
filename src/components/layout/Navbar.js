import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="name">
        Denish Balami
      </Link>
      <div className="nav-wrapper">
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
