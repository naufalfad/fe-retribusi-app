// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginWajibRetribusi";
import Regist from "./pages/RegisterWajibRetribusi";
import CreatePassword from "./pages/CreatePassword";
import VerifyOtp from "./pages/VerifyOtp";
import Waiting from "./pages/WaitingVerify";
// Import index.css secara global, ini sudah dilakukan di main.jsx/index.js

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regist />} />
        <Route path="/password" element={<CreatePassword />} />
        <Route path="/otp" element={<VerifyOtp />} />
        <Route path="/waiting" element={<Waiting />} />
      </Routes>
    </Router>
  );
}

export default App;
