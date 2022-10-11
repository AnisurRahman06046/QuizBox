import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizandOptions from "../QuizandOptions/QuizandOptions";

const Quiz = () => {
  const quizData = useLoaderData();
  const { questions } = quizData.data;
  console.log(questions);

  return (
    <div>
      <h1>here are the quizes</h1>
      {questions.map((q) => (
        <QuizandOptions q={q}></QuizandOptions>
      ))}
    </div>
  );
};

export default Quiz;
