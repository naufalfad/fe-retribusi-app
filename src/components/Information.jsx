// src/components/Information.jsx
import React from 'react';
import styles from '../css/Information.module.css'; // Import CSS Module

// Import gambar-gambar Anda
import mainIllustration from '../assets/main-information.png'; // Ilustrasi utama
import bogorBersihImage from '../assets/sosialisasi.png'; // Gambar Sosialisasi Bogor Bersih
import sensorPolusiImage from '../assets/sensor.png'; // Gambar Sensor Polusi Udara
import incineratorImage from '../assets/uji-coba.png'; // Gambar Uji Coba Incinerator
import penegakanHukumImage from '../assets/penegakan-hukum.png'; // Gambar Penegakan Hukum Limbah

const InformationSection = () => {
    return (
        <section className={styles.informationSection}>
            <div className={`${styles.informationContent} container`}> {/* Gunakan .container global */}

                {/* Bagian Utama Informasi Retribusi */}
                <div className={styles.mainInfo}>
                    <img
                        src={mainIllustration}
                        alt="Ilustrasi Informasi Retribusi"
                        className={styles.mainInfoIllustration}
                    />
                    <div className={styles.mainInfoText}>
                        <h2 className={styles.mainInfoTitle}>Informasi Retribusi</h2>
                        <p className={styles.mainInfoDescription}>
                            Aplikasi Retribusi Sampah merupakan platform digital yang dirancang
                            untuk mempermudah masyarakat dalam mengelola dan membayar
                            retribusi sampah secara online. Melalui sistem ini, pengguna dapat
                            melakukan pendaftaran, memeriksa tagihan, hingga melihat riwayat
                            pembayaran dengan cepat dan aman. Dilengkapi dengan fitur
                            notifikasi pengingat, pelaporan, serta integrasi dengan sistem
                            pengelolaan sampah daerah, aplikasi ini membantu menciptakan
                            layanan yang lebih efisien, transparan, dan terhubung secara digital.
                        </p>
                    </div>
                </div>

                {/* Grid Fitur-Fitur Tambahan */}
                <div className={styles.featureGrid}>
                    {/* Fitur 1: Sosialisasi Bogor Bersih */}
                    <div className={styles.featureItem}>
                        <img
                            src={bogorBersihImage}
                            alt="Sosialisasi Bogor Bersih"
                            className={styles.featureImage}
                        />
                        <div className={styles.featureTextContent}>
                            <h3 className={styles.featureTitle}>Sosialisasi Bogor Bersih</h3>
                            <p className={styles.featureDescription}>
                                Bogor bersih adalah suatu program inisiasi Kabupaten Bogor untuk merubah
                                paradigma kebersihan.
                            </p>
                        </div>
                    </div>

                    {/* Fitur 2: Sensor Polusi Udara */}
                    <div className={styles.featureItem}>
                        <img
                            src={sensorPolusiImage}
                            alt="Sensor Polusi Udara"
                            className={styles.featureImage}
                        />
                        <div className={styles.featureTextContent}>
                            <h3 className={styles.featureTitle}>Sensor Polusi Udara</h3>
                            <p className={styles.featureDescription}>
                                Implementasi sensor polusi udara di beberapa titik strategis.
                            </p>
                        </div>
                    </div>

                    {/* Fitur 3: Uji Coba Incinerator */}
                    <div className={styles.featureItem}>
                        <img
                            src={incineratorImage}
                            alt="Uji Coba Incinerator"
                            className={styles.featureImage}
                        />
                        <div className={styles.featureTextContent}>
                            <h3 className={styles.featureTitle}>Uji Coba Incinerator</h3>
                            <p className={styles.featureDescription}>
                                DLH Bogor menerapkan program incinerator tanpa polusi udara sebagai
                                komitmen program pemusnahan sampah dengan teknologi hijau.
                            </p>
                        </div>
                    </div>

                    {/* Fitur 4: Penegakan Hukum Limbah */}
                    <div className={styles.featureItem}>
                        <img
                            src={penegakanHukumImage}
                            alt="Penegakan Hukum Limbah"
                            className={styles.featureImage}
                        />
                        <div className={styles.featureTextContent}>
                            <h3 className={styles.featureTitle}>Penegakan Hukum Limbah</h3>
                            <p className={styles.featureDescription}>
                                Langkah DLH dalam melaksanakan penegakan hukum pengelolaan limbah.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InformationSection;