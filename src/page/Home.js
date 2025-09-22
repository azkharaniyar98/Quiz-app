import React from "react";
import { Button, Stack, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "slateblue",
      padding: "0 1rem",
      width: "100%",
      maxWidth: "100vw",
      boxSizing: "border-box",
      overflow: "hidden"
    }}>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
        <Card 
          elevation={5} 
          sx={{ 
            borderRadius: "20px 0 20px 0", 
            backgroundColor: "white", 
            maxWidth: "700px", 
            width: "100%", 
            padding: "1rem"
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
              Football & NBA Quiz
            </Typography>
            <Typography variant="body1" gutterBottom>
              Test your knowledge on Football & NBA. <strong>Let’s get Started.</strong>
            </Typography>
            <Stack direction="column" spacing={3} sx={{ marginTop: 2, alignItems: "center" }}>
              <Button variant="contained" color="primary" onClick={() => navigate("/quiz")}>
                Start Quiz
              </Button>
              <Button variant="text" onClick={() => navigate("/scoreboard")}>
                Scoreboard
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </div>
      <div style={{ margin: "0 -1rem" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
