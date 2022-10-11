import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h3>QuizBox</h3>
      </div>
      <nav className="nav-items">
        <Link to="/home">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  );
};

export default Header;
