// src/App.jsx
import React from "react";
import Home from "./pages/Home"
import Information from "./pages/Information"
import Pendapatan from "./pages/Pendapatan";
import StatusPembayaran from "./pages/StatusPembayaran";
import Pendaftaran from "./pages/Pendaftaran";
import Pembayaran from "./pages/Pembayaran";
// Import index.css secara global, ini sudah dilakukan di main.jsx/index.js

function App() {
  return (
    <>
      <Home />
      <Information />
      <StatusPembayaran />
      <Pendaftaran />
      <Pembayaran />
      <Pendapatan />
    </>
  );
}

export default App;
