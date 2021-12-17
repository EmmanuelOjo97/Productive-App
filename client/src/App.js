import React from "react";
import "./App.css";
import Calculator from "./Calculator/Calculator";
import StartTime from "./Pomodoro/StartTime";
import Todo from "./Todo/Todo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";

function App() {
  return (
    <div className="page">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Pomodoro" element={<StartTime />} />
          <Route path="*" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
