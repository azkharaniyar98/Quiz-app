import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Settings from "./components/Settings";
import Quiz from "./page/Quiz";
import Scores from "./components/Score";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/Score" element={<Scores />} />
    </Routes>
  );
}

export default App;
