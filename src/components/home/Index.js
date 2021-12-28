import React from "react";
import { Link } from "react-router-dom";

function HomeIndex() {
  return (
    <div className="banner">
      <div className="banner-image">
        <img src="/images/typewriter.png" alt="" />
      </div>
      <div className="banner-title">Dhane is a good boy</div>
      <div className="banner-nav">
        <Link to="/about">About</Link> | <Link to="/article">Writing</Link> |
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default HomeIndex;
