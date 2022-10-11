import React from "react";
import "./Quizandoptions.css";

const QuizandOptions = ({ q }) => {
  //   console.log(question);
  const { question, options } = q;
  console.log(question);
  console.log(options);

  return (
    <div>
      <div className="quiz-container">
        <p>{question.replace(/(<([^>]+)>)/gi, "")}</p>
        <div className="quiz-answer-option">
          <input type="radio" name="option1" value={options[0]} id="" />
          {options[0]} <br />
          <input type="radio" name="option1" value={options[1]} id="" />
          {options[1]} <br />
          <input type="radio" name="option1" value={options[2]} id="" />
          {options[2]} <br />
          <input type="radio" name="option1" value={options[3]} id="" />
          {options[3]} <br />
        </div>
      </div>
    </div>
  );
};

export default QuizandOptions;
