import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Settings from "./components/Settings";
import Quiz from "./page/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;
