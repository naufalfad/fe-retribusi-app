import React, { useState } from "react";

const HowToPay = () => {
    const [metode, setMetode] = useState("qris");

    const colors = [
        "bg-yellow-400",
        "bg-blue-500",
        "bg-pink-500",
        "bg-green-500",
        "bg-orange-500",
    ];

    const langkahQRIS = [
        "Cek Tagihan — Masuk ke akun wajib retribusi kemudian pilih menu “Bayar Tagihan” untuk melihat nominal dan status.",
        "Masukkan NPWRD untuk memvalidasi data.",
        "Buat ID Billing untuk membuat slip dan menampilkan slip sebagai referensi.",
        "Scan QRIS yang ditampilkan kemudian bayar tagihan dan konfirmasi. Simpan bukti pembayaran dengan hati-hati.",
        "Cek status pembayaran menjadi Lunas setelah beberapa menit melakukan pembayaran.",
    ];

    const langkahPetugas = [
        "Datang ke Kantor — Kunjungi pos pelayanan atau kantor resmi DLH Kabupaten Bogor dengan membawa identitas.",
        "Minta SKRD — Ajukan penerbitan Surat Ketetapan Retribusi Daerah (SKRD).",
        "Bayar Tagihan — Lakukan pembayaran sesuai nominal pada SKRD kepada petugas dan wajib menerima bukti setor.",
        "Cek Status — Petugas menginput transaksi, Anda bisa cek status di aplikasi.",
    ];

    return (
        <section id="pembayaran" className="max-w-6xl mx-auto p-6 mt-10">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-green-900">Cara Membayar</h1>
                <p className="text-gray-700">
                    Pilih jalur pembayaran yang paling nyaman. Ikuti langkahnya satu per satu
                    hingga transaksi tercatat di sistem.
                </p>
            </header>

            {/* Tombol Pilihan */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                <button
                    onClick={() => setMetode("qris")}
                    className={`px-5 py-2 rounded-full font-semibold transition-all ${metode === "qris"
                            ? "bg-green-700 text-white"
                            : "bg-white text-green-700 border border-green-600"
                        }`}
                >
                    Bayar Via QRIS
                </button>
                <button
                    onClick={() => setMetode("petugas")}
                    className={`px-5 py-2 rounded-full font-semibold transition-all ${metode === "petugas"
                            ? "bg-green-700 text-white"
                            : "bg-white text-green-700 border border-green-600"
                        }`}
                >
                    Bayar Langsung ke Petugas
                </button>
            </div>

            {/* Card Utama */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-all">
                {metode === "qris" ? (
                    <>
                        <h2 className="text-lg font-semibold text-green-900 mb-2">
                            Langkah Pembayaran Melalui QRIS
                        </h2>
                        <p className="text-sm text-gray-700 mb-4">
                            Cepat, aman, dan tanpa tunai.
                        </p>
                        <ol className="space-y-3">
                            {langkahQRIS.map((text, i) => (
                                <li key={i} className="flex items-start">
                                    <span
                                        className={`w-3 h-3 rounded-full ${colors[i]} mt-2 mr-3`}
                                    ></span>
                                    <p className="text-sm leading-relaxed">{text}</p>
                                </li>
                            ))}
                        </ol>
                        <div className="bg-green-50 mt-4 p-3 rounded-md text-sm border-l-4 border-green-600">
                            Bayar hanya melalui QRIS resmi DLH. Cek kembali nama penerima
                            pada layar pembayaran sebelum konfirmasi.
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-lg font-semibold text-green-900 mb-2">
                            Langkah Pembayaran Langsung ke Petugas
                        </h2>
                        <p className="text-sm text-gray-700 mb-4">
                            Cocok untuk pengguna yang membutuhkan layanan tatap muka.
                        </p>
                        <ol className="space-y-3">
                            {langkahPetugas.map((text, i) => (
                                <li key={i} className="flex items-start">
                                    <span
                                        className={`w-3 h-3 rounded-full ${colors[i]} mt-2 mr-3`}
                                    ></span>
                                    <p className="text-sm leading-relaxed">{text}</p>
                                </li>
                            ))}
                        </ol>
                        <div className="bg-green-50 mt-4 p-3 rounded-md text-sm border-l-4 border-green-600">
                            Pastikan petugas yang melayani beridentitas resmi. Simpan bukti
                            bayar (kwitansi) untuk keperluan verifikasi.
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default HowToPay;