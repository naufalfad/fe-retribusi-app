// src/components/Navbar.jsx
import React from 'react';
import styles from '../css/Navbar.module.css'; // Import CSS Module
import Logo from '../assets/kab-bogor.png'; // Pastikan path ke logo benar

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navbarContent} container`}> {/* Gunakan .container global */}
                {/* Logo */}
                <div className={styles.logoContainer}>
                    <img src={Logo} alt="Logo Kabupaten Bogor" className={styles.logo} />
                </div>

                {/* Navigasi Utama */}
                <div className={styles.navbarNav}>
                    <a href="#">Home</a>
                    <a href="#">Informasi Retribusi</a>
                    <a href="#">Cek Status</a>
                    <a href="#">Cara Pembayaran</a>
                    <a href="#">Pendapatan</a>
                </div>

                {/* Tombol Login */}
                <div>
                    <button className={styles.loginButton}>
                        Login
                    </button>
                </div>

                {/* Hamburger Menu untuk Mobile (Anda bisa menambahkan logika state untuk membuka/menutup) */}
                {/* <div className={styles.hamburgerMenu}>
          <button className={styles.hamburgerButton}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div> */}
            </div>
        </nav>
    );
};

export default Navbar;