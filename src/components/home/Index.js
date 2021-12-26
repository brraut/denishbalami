import React from "react";
import { Link } from "react-router-dom";

function HomeIndex() {
  return (
    <div className="banner">
      <div className="banner-image">
        <img src="/images/banner.jpeg" alt="" />
      </div>
      <div className="banner-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores itaque
      </div>
      <div className="banner-nav">
        <Link to="/about">About</Link> | <Link to="/article">Writing</Link> |
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default HomeIndex;
