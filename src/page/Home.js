// src/pages/Home.js
import React from "react";
import { Button, Stack, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <Card
        elevation={5}
        sx={{ borderRadius: "20px 0 20px 0", backgroundColor: "white" }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Football & NBA Quiz
          </Typography>
          <Typography variant="body1" gutterBottom>
            Test your knowledge on Football & NBA.{" "}
            <strong>Let’s get Started.</strong>
          </Typography>
          <Stack
            direction="column"
            spacing={3}
            sx={{ marginTop: 2, alignItems: "center" }}
          >
            <Button variant="contained" color="primary" onClick={() => navigate("/quiz")}>
              Start Quiz
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => navigate("/settings")}>
              Settings
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
