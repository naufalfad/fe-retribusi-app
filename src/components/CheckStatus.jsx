// src/components/CheckStatusSection.jsx
import React from 'react';
import styles from '../css/CheckStatus.module.css'; // Import CSS Module

// Import gambar-gambar Anda
import mainIllustration from '../assets/cek-status-main.png';
import step1Icon from '../assets/step-input-id.png';
import step2Icon from '../assets/step-whatsapp.png';
import step3Icon from '../assets/step-finished.png';

const CheckStatus = () => {
    return (
        <section className={styles.checkStatusSection}>
            <div className={`${styles.checkStatusContent} container`}>

                {/* --- PERUBAHAN UTAMA DI SINI: Layout Berdampingan --- */}
                <div className={styles.desktopLayout}>
                    {/* Konten Kiri: Judul, Deskripsi, dan Langkah-langkah */}
                    <div className={styles.leftContent}>
                        <h2 className={styles.mainTitle}>Cek Status Pembayaran</h2>
                        <p className={styles.description}>
                            Memberikan kemudahan bagi wajib retribusi dalam monitoring
                            kewajiban retribusi sampah. Pengguna cukup memasukkan ID Retribusi
                            pada kolom yang tersedia, kemudian sistem akan menampilkan atau
                            mengirimkan hasil pengecekan melalui WhatsApp secara otomatis.
                            Fitur ini membantu memastikan setiap wajib retribusi dapat
                            mengetahui apakah pembayaran telah diverifikasi, masih menunggu
                            proses, atau belum dilakukan, tanpa perlu datang langsung ke kantor
                            layanan.
                        </p>

                        {/* Grid Langkah-langkah */}
                        <div className={styles.stepsGrid}>
                            {/* Langkah 1 */}
                            <div className={styles.stepItem}>
                                <img src={step1Icon} alt="Langkah 1: Masukkan ID" className={styles.stepIcon} />
                                <p className={styles.stepText}>Masukkan ID Retribusi</p>
                            </div>

                            {/* Langkah 2 */}
                            <div className={styles.stepItem}>
                                <img src={step2Icon} alt="Langkah 2: Status WhatsApp" className={styles.stepIcon} />
                                <p className={styles.stepText}>Status akan dikirimkan melalui WhatsApp</p>
                            </div>

                            {/* Langkah 3 */}
                            <div className={styles.stepItem}>
                                <img src={step3Icon} alt="Langkah 3: Cek Status Selesai" className={styles.stepIcon} />
                                <p className={styles.stepText}>Cek Status Selesai</p>
                            </div>
                        </div>
                    </div>

                    {/* Ilustrasi Utama di Kanan */}
                    <img
                        src={mainIllustration}
                        alt="Ilustrasi Cek Status Pembayaran"
                        className={styles.mainIllustration}
                    />
                </div>
                {/* --- AKHIR PERUBAHAN UTAMA --- */}


                {/* Form Input ID Retribusi (Tetap di bawah) */}
                <div className={styles.inputSection}>
                    <input
                        type="text"
                        placeholder="Masukkan ID Retribusi"
                        className={styles.inputField}
                    />
                    <button className={styles.checkButton}>
                        Cek Status
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CheckStatus;