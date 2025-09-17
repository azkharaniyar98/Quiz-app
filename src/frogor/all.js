import easyQuestions from "./easy";
import mediumQuestions from "./medium";
import hardQuestions from "./hard";

export function getQuestionsByDifficulty(difficulty) {
    if (difficulty === "easy") return easyQuestions;
    if (difficulty === "medium") return mediumQuestions;
    if (difficulty === "hard") return hardQuestions;
    return [];
}