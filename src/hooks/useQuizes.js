import { createContext, useState } from "react";

import { quiz } from "../main";
export const UserContext = createContext();



const useQuizes = () => {
  //
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answeredQuiz, setAnsweredQuiz] = useState(quiz);
  
 

  //   taking value from each input and updating the correct answer from quiz
  const handleSimpleInput = (e) => {
    answeredQuiz[currentQuestion].correct_answer = e.target.value;
  };

  // ------------------------------
  // allAnswers  holds the correct answers to all questions
  const handleSubmit = () => {
    const allAnswers = answeredQuiz.map((answer) => answer.correct_answer);
   
    

     window.location.href='./result';
  };
  // ------------------------------

  return {
    currentQuestion,
    setCurrentQuestion,
    answeredQuiz,
    setAnsweredQuiz,
    handleSimpleInput,
    handleSubmit,
   
   
    
  };
  
};

export default useQuizes;
