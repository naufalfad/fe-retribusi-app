// src/App.jsx
import React from "react";
import Home from "./pages/Home"
import Pendapatan from "./pages/Pendapatan";
import StatusPembayaran from "./pages/StatusPembayaran";
import Pendaftaran from "./pages/Pendaftaran";
// Import index.css secara global, ini sudah dilakukan di main.jsx/index.js

function App() {
  return (
    <>
      <Home />
      <StatusPembayaran />
      <Pendaftaran />
      <Pendapatan />
    </>
  );
}

export default App;
