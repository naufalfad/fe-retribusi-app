// src/components/HeroSection.jsx
import React from 'react';
import styles from '../css/Home.module.css'; // Import CSS Module
import HeroImage from '../assets/hero.png'; // Pastikan path ke ilustrasi benar

const Home = () => {
    return (
        <section className={styles.heroSection} style={{ paddingTop: '0px' }}>
            <div className={`${styles.heroContent} container`}>
                {/* Konten Teks */}
                <div className={styles.textContainer}>
                    <h1 className={styles.mainTitle}>
                        Aplikasi Retribusi <br /> Sampah
                    </h1>
                    <p className={styles.subTitle}>
                        Digitalisasi Pelayanan Pembayaran Retribusi Sampah Kabupaten Bogor
                    </p>
                    <p className={styles.description}>
                        Solusi digital untuk pelayanan Retribusi Sampah Daerah secara mudah, aman, dan transparan.
                    </p>
                    <div className={styles.buttonGroup}>
                        <button className={styles.primaryButton}>
                            Pendaftaran Retribusi
                        </button>
                        <button className={styles.primaryButton}>
                            Pembayaran Retribusi
                        </button>
                    </div>
                </div>

                {/* Ilustrasi */}
                <div className={styles.illustrationContainer}>
                    <img
                        src={HeroImage}
                        alt="Ilustrasi Buang Sampah"
                        className={styles.heroImage}
                    />
                </div>
            </div>
        </section>
    );
};

export default Home