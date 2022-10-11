import React from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Home = () => {
  const topics = useLoaderData();
  console.log(topics.data);
  const topicsData = topics.data;
  return (
    <div>
      <div className="home-banner">
        <h2>QuizBox</h2>
        <p>
          Hi Heroes,this site is for the programmer who have strong basics about
          the programming languages.Here,you can justify your basics by
          participating several Quizes .
          <span className="para-text">
            So,are you ready to take challenges ?
          </span>
        </p>
        <div className="topics">
          {topicsData.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
