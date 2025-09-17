import React, { useState, useContext } from "react";
import { QuizContext } from "../inside/QuizContext";
import Quizpage from "./Quizstartpage";
import Quizquestions from "./Quizquestions";


function Quiz() {
  const { difficulty, numQuestions } = useContext(QuizContext);
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started ? (
        <Quizpage onStart={() => setStarted(true)} />
      ) : (
        <Quizquestions 
          difficulty={difficulty} 
          numQuestions={numQuestions} 
          onRestart={() => setStarted(false)} 
        />
      )}
    </>
  );
}

export default Quiz;
