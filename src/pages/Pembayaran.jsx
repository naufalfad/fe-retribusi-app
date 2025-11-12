// src/pages/Pembayaran.jsx
import React, { useState } from "react";
import {
  CheckCircle,
  MapPin,
  AlertTriangle,
  CreditCard,
  Scan,
  FileText,
  Smartphone,
} from "lucide-react";

/* ---------- DATA ---------- */
const QRIS_STEPS = [
  {
    id: 1,
    title: "Cek Tagihan",
    description:
      'Masuk ke akun wajib retribusi kemudian pilih menu "Bayar Tagihan" untuk melihat nominal dan status.',
    icon: CheckCircle,
  },
  {
    id: 2,
    title: "Masukkan NPWRD",
    description: "Masukkan NPWRD untuk memvalidasi data.",
    icon: FileText,
  },
  {
    id: 3,
    title: "ID Billing",
    description:
      "Buat ID Billing untuk membuat slip dan menampilkan slip sebagai referensi.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Scan QRIS",
    description:
      "Scan QRIS yang ditampilkan kemudian bayar tagihan dan konfirmasi. Simpan bukti pembayaran dengan hati-hati.",
    icon: Scan,
  },
  {
    id: 5,
    title: "Cek Status Pembayaran",
    description:
      "Masuk ke dalam aplikasi dan cek status pembayaran menjadi lunas beberapa menit setelah pembayaran.",
    icon: Smartphone,
  },
];

const PETUGAS_STEPS = [
  {
    id: 1,
    title: "Datangi Lokasi Pembayaran",
    description: "Datangi lokasi pembayaran retribusi resmi yang ditentukan.",
    icon: MapPin,
  },
  {
    id: 2,
    title: "Konfirmasi Petugas",
    description: "Tunjukkan ID retribusi Anda kepada petugas untuk validasi.",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Lakukan Pembayaran",
    description: "Lakukan pembayaran tunai sesuai nominal tagihan.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Terima Bukti",
    description: "Terima dan simpan bukti pembayaran resmi dari petugas.",
    icon: CheckCircle,
  },
];

/* ---------- CARD LANGKAH ---------- */
const StepCard = ({ id, title, description, icon: Icon }) => {
  const green = "#1C7C54";

  return (
    <div className="relative rounded-[12px] border border-outline dark:border-outline-dark bg-fillKolom dark:bg-fillKolom-dark p-5 shadow-[0_2px_0_rgba(0,0,0,0.03)]">
      {/* Badge nomor */}
      <div className="absolute -top-3 border border-white border-[2px] left-5 w-8 h-8 rounded-full bg-green dark:bg-green-dark text-white dark:text-black text-sm font-normal flex items-center justify-center shadow-sm">
        {id}
      </div>

      <div className="flex items-start gap-3">
        <Icon className="w-[24px] h-[24px] mt-[2px] flex-shrink-0 text-green dark:text-green-dark" />
        <div>
          <h4 className="text-[16px] font-semibold text-green dark:text-green-dark">
            {title}
          </h4>
          <p className="mt-2 text-[13px] leading-snug text-black dark:text-black-dark">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ---------- PAGE ---------- */
export default function Pembayaran() {
  const [activeMethod, setActiveMethod] = useState("QRIS");
  const steps = activeMethod === "QRIS" ? QRIS_STEPS : PETUGAS_STEPS;
  const title =
    activeMethod === "QRIS"
      ? "Langkah Pembayaran Melalui QRIS"
      : "Langkah Pembayaran Langsung ke Petugas";

  const green = "#1C7C54";

  return (
    <section className="bg-background dark:bg-background-dark min-h-screen">
      <div className="w-full pt-10 md:pt-12 lg:pt-14 pb-16">
        <div className="px-[70px] w-full">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-[60px] md:text-6xl font-bold text-green dark:text-green-dark">
              Cara Membayar
            </h1>
            <p className="mt-3 text-[16px] text-black dark:text-black-dark">
              Pilih jalur pembayaran yang paling nyaman. Ikuti langkahnya satu
              per satu hingga transaksi tercatat di sistem.
            </p>
          </div>

          {/* Tombol metode */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveMethod("QRIS")}
              className={`h-11 px-6 rounded-[10px] text-[15px] font-normal transition ${
                activeMethod === "QRIS"
                  ? "bg-green dark:bg-green-dark text-white dark:text-black shadow-md"
                  : "bg-green dark:bg-green-dark text-white dark:text-black hover:bg-[#0AA868] dark:hover:bg-green"
              }`}
            >
              Bayar Via QRIS
            </button>
            <button
              onClick={() => setActiveMethod("PETUGAS")}
              className={`h-11 px-6 rounded-[10px] text-[15px] font-normal transition ${
                activeMethod === "PETUGAS"
                  ? "bg-green dark:bg-green-dark text-white dark:text-black shadow-md"
                  : "bg-green dark:bg-green-dark text-white dark:text-black hover:bg-[#0AA868] dark:hover:bg-green"
              }`}
            >
              Bayar Langsung ke Petugas
            </button>
          </div>
          {/* Judul langkah + deskripsi dinamis */}
          <div className="mb-6">
            <h2 className="text-[20px] text-green dark:text-green-dark font-semibold leading-snug">
              {title}
            </h2>
            {activeMethod === "QRIS" ? (
              <p className="text-[15px] text-[#656565] font-medium mt-1">
                Cepat, aman, dan tanpa tunai.
              </p>
            ) : (
              <p className="text-[15px] text-[#656565] font-medium mt-1">
                Cocok untuk pengguna yang membutuhkan layanan tatap muka.
              </p>
            )}
          </div>

          {/* Grid 4 kolom di lg, 2 kolom di md — wrap sisa ke baris berikutnya */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <StepCard key={s.id} {...s} />
            ))}
          </div>

          {/* Catatan Peringatan di Bawah */}
          {activeMethod === "QRIS" ? (
            <div className="mt-10 max-w-[900px] p-4 border border-outline dark:border-outline-dark bg-fillKolom dark:bg-fillKolom-dark rounded-lg flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-green dark:text-green-dark flex-shrink-0" />
              <p className="text-sm text-green dark:text-green-dark leading-snug">
                Bayar hanya melalui QRIS resmi DLH. Cek kembali nama penerima
                pada layar pembayaran sebelum konfirmasi.
              </p>
            </div>
          ) : (
            <div className="mt-10 max-w-[990px] p-4 border border-outline dark:border-outline-dark bg-fillKolom dark:bg-fillKolom-dark rounded-lg flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-green dark:text-green-dark flex-shrink-0" />
              <p className="text-sm text-green dark:text-green-dark leading-snug">
                Pastikan pembayaran dilakukan hanya kepada petugas resmi DLH
                Kabupaten Bogor. Simpan bukti pembayaran sebagai arsip.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
