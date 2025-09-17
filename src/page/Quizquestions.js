import React, { useState, useMemo } from "react";
import { Card, CardContent, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getQuestionsByDifficulty } from "../frogor/all";

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sampleQuestions(pool, num) {
  const out = [];
  const shuffled = shuffleArray(pool);
  for (let i = 0; i < num; i++) {
    out.push(shuffled[i % shuffled.length]);
  }
  return shuffleArray(out);
}

function Quizquestions({ difficulty, numQuestions, onRestart }) {
  const navigate = useNavigate();

  const questions = useMemo(() => {
    const pool = getQuestionsByDifficulty(difficulty);
    return sampleQuestions(pool, numQuestions);
  }, [difficulty, numQuestions]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQ = questions[currentIndex];

  if (!currentQ) {
    return <Typography sx={{ textAlign: "center" }}>No questions available for this difficulty.</Typography>;
  }

  function handleSelect(option) {
    if (selected !== null) return;
    setSelected(option);

    if (option === currentQ.answer) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      const next = currentIndex + 1;
      if (next < questions.length) {
        setCurrentIndex(next);
        setSelected(null);
      } else {
        const entry = {
          score: score + (option === currentQ.answer ? 1 : 0),
          total: questions.length,
          difficulty,
          numQuestions,
          date: new Date().toISOString(),
        };
        const existing = JSON.parse(localStorage.getItem("quiz_scores") || "[]");
        existing.push(entry);
        localStorage.setItem("quiz_scores", JSON.stringify(existing));

        setFinished(true);
      }
    }, 700);
  }

  function restart() {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    onRestart();
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <Card elevation={5} sx={{ borderRadius: "20px 0 20px 0", backgroundColor: "white" }}>
        <CardContent sx={{ textAlign: "center" }}>
          {finished ? (
            <>
              <Typography variant="h5" gutterBottom>Quiz Finished!</Typography>
              <Typography gutterBottom>Your score: <strong>{score}</strong> / {questions.length}</Typography>
              <Stack spacing={2} sx={{ mt: 3, alignItems: "center" }}>
                <Button variant="contained" onClick={restart}>Play Again</Button>
                <Button variant="outlined" onClick={() => navigate("/scoreboard")}>View Scoreboard</Button>
                <Button variant="text" onClick={() => navigate("/")}>Home</Button>
              </Stack>
            </>
          ) : (
            <>
              <Typography variant="h6" gutterBottom>
                Question {currentIndex + 1} of {questions.length}
              </Typography>
              <Typography variant="body1" gutterBottom>{currentQ.question}</Typography>
              <Stack spacing={2} sx={{ mt: 3 }}>
                {currentQ.options.map((opt, i) => {
                  const isSelected = selected === opt;
                  const isCorrect = opt === currentQ.answer;
                  let color = "primary";
                  if (selected !== null) {
                    if (isSelected) color = isCorrect ? "success" : "error";
                    else if (isCorrect) color = "success";
                    else color = "primary";
                  }
                  return (
                    <Button
                      key={i}
                      variant={isSelected || selected !== null ? "contained" : "outlined"}
                      disabled={selected !== null}
                      color={color}
                      onClick={() => handleSelect(opt)}
                    >
                      {opt}
                    </Button>
                  );
                })}
              </Stack>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Quizquestions;
