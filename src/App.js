import React from "react";
import { Button, Stack, Card, CardContent, Typography } from "@mui/material";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <Card elevation={5} sx={{ borderRadius: 3, backgroundColor: "white" }}>
        <CardContent sx={{textAlign: "center"}}>
          <Typography variant="h4" gutterBottom >
            Football & NBA Quiz
          </Typography>
          <Typography variant="body1" gutterBottom>
          Test your knowledge on Football & NBA. <strong>Lets get Started.</strong>
          </Typography>
          <Stack direction="column" spacing={3} sx={{ marginTop: 2, alignItems: "center"}}>
            <Button variant="contained" color="primary">
              Start Quiz
            </Button>
            <Button variant="outlined" color="secondary">
              Settings
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
