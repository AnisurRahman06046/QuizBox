import React from "react";
import "./Topic.css";

const Topic = ({ topic }) => {
  console.log(topic);
  const { name, logo, totol } = topic;
  return (
    <div>
      <img src={logo} alt="" />
      <h4>{name}</h4>
    </div>
  );
};

export default Topic;
