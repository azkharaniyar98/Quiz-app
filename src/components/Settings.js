import React, { useContext } from "react";
import { QuizContext } from "../inside/QuizContext";
import { Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const { difficulty, setDifficulty, numQuestions, setNumQuestions } = useContext(QuizContext);
    const navigate = useNavigate();

    const handleReset = () => {
        setDifficulty("easy");
        setNumQuestions(10);
        localStorage.removeItem("quiz_scores");
    };

    return (
        <Card elevation={5} sx={{ borderRadius: "20px 0 20px 0", backgroundColor: "white", maxWidth: 400, margin: "2rem auto" }}>
            <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>
                    Quiz Settings
                </Typography>

                <Stack spacing={3} sx={{ mt: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="difficulty-label">Difficulty</InputLabel>
                        <Select labelId="difficulty-label" value={difficulty} label="Difficulty" onChange={(e) => setDifficulty(e.target.value)}>
                            <MenuItem value="easy">Easy</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="hard">Hard</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="num-questions-label">Number of Questions</InputLabel>
                        <Select labelId="num-questions-label" value={numQuestions} label="Number of Questions" onChange={(e) => setNumQuestions(e.target.value)}>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="outlined" color="secondary" onClick={handleReset}>
                        Reset Progress
                    </Button>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button variant="text" onClick={() => navigate(-1)}>
                            Back
                        </Button>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default Settings;
