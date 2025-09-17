import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Stack, Button, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Scoreboard() {
  const [scores, setScores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("quiz_scores") || "[]");
    existing.sort((a, b) => new Date(b.date) - new Date(a.date));
    setScores(existing);
  }, []);

  function clearScores() {
    localStorage.removeItem("quiz_scores");
    setScores([]);
  }

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "1rem" }}>
      <Card elevation={5} sx={{ borderRadius: "20px 0 20px 0", backgroundColor: "white" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Scoreboard</Typography>
          {scores.length === 0 ? (
            <Typography>No previous scores found.</Typography>
          ) : (
            <List>
              {scores.map((s, i) => (
                <ListItem key={i} divider>
                  <ListItemText
                    primary={`${s.score} / ${s.total} — ${s.difficulty} (${s.numQuestions} Qs)`}
                    secondary={new Date(s.date).toLocaleString()}
                  />
                </ListItem>
              ))}
            </List>
          )}

          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button variant="contained" color="error" onClick={clearScores} disabled={scores.length === 0}>Clear Scores</Button>
            <Button variant="outlined" onClick={() => navigate("/")}>Home</Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
