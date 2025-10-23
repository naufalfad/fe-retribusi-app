import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const HowToRegist = () => {
    const [open, setOpen] = useState(null);

    const toggle = (i) => setOpen(open === i ? null : i);

    const faqList = [
        "Saya tidak menerima kode OTP di WhatsApp",
        "Bagaimana jika titik koordinat saya salah?",
        "Satu nomor WhatsApp bisa digunakan di beberapa akun?",
        "Apakah pendaftaran bisa dilakukan tanpa NIK/NIB?",
        "Saya sudah daftar tapi tidak bisa login, kenapa?",
        "Bagaimana jika saya salah mengisi data saat pendaftaran?",
    ];

    const colors = [
        "bg-yellow-400",
        "bg-blue-500",
        "bg-pink-500",
        "bg-green-500",
        "bg-orange-500",
        "bg-red-500",
        "bg-purple-500",
        "bg-teal-500",
        "bg-lime-600",
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-green-900">Cara Mendaftar</h1>
                <p className="text-gray-700">
                    Tahapan pendaftaran Wajib Retribusi Sampah Kabupaten Bogor
                </p>
            </header>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Langkah */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-lg font-semibold text-green-900 mb-4">
                        Langkah Pendaftaran Wajib Retribusi
                    </h2>
                    <ol className="space-y-3 list-none">
                        {[
                            "Buka halaman website resmi Retribusi Sampah Kabupaten Bogor",
                            "Klik menu “Login”",
                            "Pilih menu “Daftar disini”",
                            "Siapkan data diri/usaha",
                            "Isi Formulir Pendaftaran",
                            "Submit Pendaftaran",
                            "Proses Verifikasi",
                            "Login ke dalam aplikasi",
                            "Download Kartu Wajib Retribusi",
                        ].map((text, i) => (
                            <li key={i} className="flex items-start">
                                <span
                                    className={`w-3 h-3 rounded-full ${colors[i]} mt-2 mr-3`}
                                ></span>
                                <p className="text-sm leading-relaxed">{text}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Persyaratan */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-lg font-semibold text-green-900 mb-4">
                        Persyaratan
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        <div className="bg-green-50 rounded-lg p-3">
                            <b>Nomor WhatsApp Aktif</b>
                            <p>
                                Pastikan nomor WhatsApp yang anda daftarkan aktif untuk notifikasi
                                dan kode OTP.
                            </p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                            <b>NIK/NIB</b>
                            <p>
                                NIK digunakan untuk validasi rumah tangga dan NIB untuk badan usaha.
                            </p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                            <b>Titik Koordinat</b>
                            <p>
                                Digunakan untuk menentukan lokasi pemungutan sampah oleh petugas.
                            </p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                            <b>Alamat Lengkap</b>
                            <p>
                                Digunakan sebagai verifikasi tambahan untuk memastikan titik koordinat benar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
                <h2 className="text-lg font-semibold text-green-900 mb-4">FAQ Singkat</h2>
                <div className="divide-y divide-green-100">
                    {faqList.map((q, i) => (
                        <div key={i} className="py-2">
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex justify-between items-center text-left font-medium"
                            >
                                {q}
                                <span className="text-green-700">
                                    {open === i ? "−" : "+"}
                                </span>
                            </button>
                            {open === i && (
                                <p className="text-sm text-gray-700 mt-1 pl-2">
                                    Silakan hubungi Helpdesk jika mengalami kendala terkait pertanyaan ini.
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-green-900 text-white rounded-xl mt-6 p-5 flex flex-col md:flex-row justify-between items-start gap-6">
                <div>
                    <h3 className="text-lg font-semibold">Butuh Bantuan?</h3>
                    <p>Hubungi Helpdesk DLH Kabupaten Bogor</p>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                        <FaEnvelope /> helpdesk.kabbogor@gmail.com
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                        <FaWhatsapp /> 0813-2345-8890
                    </div>
                </div>
                <div className="text-sm">
                    <b>Alamat:</b>
                    <p>
                        Jl. Tegar Beriman, Tengah, Kec. Cibinong, Kabupaten Bogor,
                        Jawa Barat 16914
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default HowToRegist;