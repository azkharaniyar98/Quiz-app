import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [difficulty, setDifficulty] = useState("easy");

    const [numQuestions, setNumQuestions] = useState(10);

    return (
        <QuizContext.Provider value={{ difficulty, setDifficulty, numQuestions, setNumQuestions }}>
            {children}
        </QuizContext.Provider>
    )
};