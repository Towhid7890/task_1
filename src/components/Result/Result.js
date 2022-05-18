import React from 'react';
import { quiz } from "../../main";


import { createContext, useState } from "react";
export const UserContext = createContext();


const Result = () => {
   
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answeredQuiz, setAnsweredQuiz] = useState(quiz);
    const allAnswers = answeredQuiz.map((answer) => answer.correct_answer);
    console.log(allAnswers);
    return (
        <div>
           { 
           allAnswers.map((answer) =><h3>Correct ans from list : {answer}</h3>)
           }
        </div>
    );
};

export default Result;