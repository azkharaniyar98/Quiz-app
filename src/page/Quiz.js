import React, { useContext } from "react";
import { Card, CardContent, Typography, Stack, Button } from "@mui/material";
import { QuizContext } from "../inside/QuizContext";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const { difficulty, numQuestions } = useContext(QuizContext);
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <Card elevation={5} sx={{ borderRadius: "20px 0 20px 0", backgroundColor: "white" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Quiz
          </Typography>
          <Typography variant="body1" gutterBottom>
            Difficulty: <strong>{difficulty}</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Number of Questions: <strong>{numQuestions}</strong>
          </Typography>
          <Stack spacing={2} sx={{ mt: 3 }}>
            <Button variant="contained" color="primary">
              Begin
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => navigate("/settings")}>
              Adjust Settings
            </Button>
            <Button variant="text" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default Quiz;


