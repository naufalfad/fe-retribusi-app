// src/App.jsx
<<<<<<< HEAD
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Information from './components/Information';
import Checkstatus from './components/CheckStatus';
import HowToRegistration from './components/HowToRegist';
import HowToPay from './components/HowToPay';
import Income from './components/Income';
=======
import React from "react";
import Home from "./pages/Home"
>>>>>>> jek
// Import index.css secara global, ini sudah dilakukan di main.jsx/index.js

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Navbar />
      <div style={{ paddingTop: '64px' }}>
        <Home />
        <Information />
        <Checkstatus />
        <HowToRegistration />
        <HowToPay />
        <Income />
        {/* Di sini Anda bisa menambahkan komponen lain yang akan tampil saat di-scroll ke bawah */}
        {/* Gunakan class CSS global atau CSS Module untuk section di bawah */}
        <section style={{ backgroundColor: '#ffffff', padding: '5rem 1rem', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4b5563' }}>Bagian Selanjutnya Akan Tampil di Sini</h2>
        </section>
        <section style={{ backgroundColor: '#f3f4f6', padding: '5rem 1rem', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4b5563' }}>Bagian Footer atau Informasi Lainnya</h2>
        </section>
      </div>
    </div>
=======
    <>
      <Home />
    </>
>>>>>>> jek
  );
}

export default App;
