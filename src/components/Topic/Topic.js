import React from "react";
import "./Topic.css";

const Topic = ({ topic }) => {
  console.log(topic);
  const { name, logo, total } = topic;
  return (
    <div className="topics-card-container">
      <div className="topic-logo">
        <img src={logo} alt="" />
      </div>
      <div className="topic-info">
        <h3>{name}</h3>
        <p>Total Quiz :{total} </p>
        <button>Start Quiz</button>
      </div>
    </div>
  );
};

export default Topic;
