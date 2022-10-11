import React from "react";
import "./Topic.css";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  console.log(topic);
  const { id, name, logo, total } = topic;
  return (
    <div className="topics-card-container">
      <div className="topic-logo">
        <img src={logo} alt="" />
      </div>
      <div className="topic-info">
        <h3>{name}</h3>
        <p>Total Quiz :{total} </p>
        <button>
          <Link to={`/topic/${id}`}>Start Quiz</Link>
        </button>
      </div>
    </div>
  );
};

export default Topic;
