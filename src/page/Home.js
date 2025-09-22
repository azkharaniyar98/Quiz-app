import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import { Button, Stack } from "@mui/material";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #6a5acd, #3f51b5)",
      }}
    >
      <Card
        style={{
          width: "450px",
          padding: "30px",
          textAlign: "center",
          borderRadius: "20px",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
          backgroundColor: "#fff",
        }}
      >
        <CardContent>
          <h1 style={{ marginBottom: "20px", color: "#333" }}>Welcome to the Quiz</h1>
          <p style={{ marginBottom: "30px", color: "#555" }}>
            Test your sports knowledge! Choose your difficulty and see how many you can get right.
          </p>

          {/* Buttons side by side or stacked */}
          <Stack spacing={2} direction="column" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate("/quiz")}
              style={{ borderRadius: "10px", padding: "12px 20px", fontSize: "16px", width: "200px" }}
            >
              Start Quiz
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigate("/scoreboard")}
              style={{ borderRadius: "10px", padding: "12px 20px", fontSize: "16px", width: "200px" }}
            >
              Scoreboard
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
