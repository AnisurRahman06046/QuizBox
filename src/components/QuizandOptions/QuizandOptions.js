import React from "react";
import "./Quizandoptions.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizandOptions = ({ q }) => {
  //   console.log(question);
  const { question, options, correctAnswer } = q;
  console.log(question);
  console.log(options);
  console.log(correctAnswer);
  const btnHandle = (e) => {
    if (correctAnswer === e) {
      toast.success("Right answer", { position: "top-center" });
    } else {
      toast.error("Wrong answer", { position: "top-center" });
    }
    console.log(e);
  };

  return (
    <div>
      <div className="quiz-container">
        <h3>{question.replace(/(<([^>]+)>)/gi, "")}</h3>
        <div className="quiz-answer-option">
          <div onClick={() => btnHandle(options[0])} className="single-option">
            <input type="radio" name="option1" value={options[0]} id="" />
            {options[0]}
          </div>
          <div onClick={() => btnHandle(options[1])} className="single-option">
            <input type="radio" name="option1" value={options[1]} id="" />
            {options[1]}
          </div>
          <div onClick={() => btnHandle(options[2])} className="single-option">
            <input type="radio" name="option1" value={options[2]} id="" />
            {options[2]}
          </div>
          <div onClick={() => btnHandle(options[3])} className="single-option">
            <input type="radio" name="option1" value={options[3]} id="" />
            {options[3]}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default QuizandOptions;
