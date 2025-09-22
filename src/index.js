import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";
import { QuizProvider } from "./inside/QuizContext";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: { main: "#6a5acd" }, 
    secondary: { main: "#3f51b5" },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QuizProvider>
          <App />
        </QuizProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);