import React, { useState } from "react";

const QuizandOptions = ({ q }) => {
  //   console.log(question);
  const { question } = q;
  console.log(question);

  return (
    <div>
      <h1>Quiz</h1>
      <p>{question.replace(/(<([^>]+)>)/gi, "")}</p>
    </div>
  );
};

export default QuizandOptions;
