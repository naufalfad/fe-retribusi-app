// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginWajibRetribusi";
import Regist from "./pages/RegisterWajibRetribusi";
// Import index.css secara global, ini sudah dilakukan di main.jsx/index.js

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regist />} />
      </Routes>
    </Router>
  );
}

export default App;
