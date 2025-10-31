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

// Data Langkah-Langkah Pembayaran Via QRIS
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
      "Masuk ke dalam aplikasi dan cek status pembayaran menjadi lunas setelah beberapa menit melakukan pembayaran.",
    icon: Smartphone,
  },
];

// Data Langkah-Langkah Pembayaran Langsung (Dummy)
const PETUGAS_STEPS = [
  {
    id: 1,
    title: "Datangi Lokasi Pembayaran",
    description:
      "Datangi lokasi pembayaran retribusi resmi yang telah ditentukan.",
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
    description:
      "Lakukan pembayaran tunai sesuai nominal tagihan yang tertera.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Terima Bukti",
    description: "Terima dan simpan bukti pembayaran resmi dari petugas.",
    icon: CheckCircle,
  },
];

// Komponen Card Langkah Pembayaran
const StepCard = ({ id, title, description, icon: Icon, isActive }) => {
  // Style konsisten dengan desain mockup
  const greenColor = "#1C7C54";
  const activeBg = isActive ? "bg-[#1C7C54]" : "bg-white";
  const activeText = isActive ? "text-white" : "text-black/80";
  const activeBorder = isActive ? "border-[#1C7C54]" : "border-black/10";
  const activeNumber = isActive
    ? "text-white border-white"
    : "text-[#1C7C54] border-[#1C7C54]";

  return (
    <div
      // Menggunakan flex-shrink agar kartu menyesuaikan diri dalam batas 70px
      className={`p-5 pt-7 border rounded-lg shadow-md transition duration-300 flex flex-col relative flex-shrink w-full md:w-[18%] lg:w-[18%] ${activeBg} ${activeBorder} min-h-[135px]`}
    >
      {/* Nomor Langkah */}
      <div
        className={`absolute top-0 left-5 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center font-bold rounded-full border-2 text-sm ${activeNumber} ${activeBg}`}
      >
        {id}
      </div>

      <div className="flex items-start mb-1">
        {/* Ikon */}
        <Icon
          className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${activeText}`}
          style={{ color: activeText === "text-white" ? "white" : greenColor }}
        />

        {/* Judul */}
        <span className={`font-semibold text-base leading-snug ${activeText}`}>
          {title}
        </span>
      </div>

      {/* Deskripsi */}
      <p className={`mt-1 text-sm ${activeText} opacity-80 leading-tight`}>
        {description}
      </p>
    </div>
  );
};

export default function Pembayaran() {
  const [activeMethod, setActiveMethod] = useState("QRIS"); // QRIS | PETUGAS

  const activeSteps = activeMethod === "QRIS" ? QRIS_STEPS : PETUGAS_STEPS;
  const activeTitle =
    activeMethod === "QRIS"
      ? "Langkah Pembayaran Melalui QRIS"
      : "Langkah Pembayaran Langsung ke Petugas";

  // Style yang Konsisten
  const greenColor = "#1C7C54";

  return (
    <section className="bg-white min-h-screen">
      {/* Wrapper utama: Menghapus px-[70px] di sini */}
      <div className="w-full pt-10 md:pt-12 lg:pt-14 pb-14 md:pb-16 lg:pb-20">
        {/* Pembungkus Konten: Menetapkan margin 70px di kiri dan kanan */}
        <div className="px-[70px] w-full">
          {/* Header Utama */}
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
              style={{ color: greenColor }}
            >
              Cara Membayar
            </h1>
            <p className="mt-3 text-lg font-medium text-black/70">
              Pilih jalur pembayaran yang paling nyaman. Ikuti langkahnya satu
              per satu hingga transaksi tercatat di sistem.
            </p>
          </div>

          {/* Tombol Pilihan Metode Pembayaran */}
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setActiveMethod("QRIS")}
              className={`py-2 px-6 rounded-full font-semibold transition duration-200 ${
                activeMethod === "QRIS"
                  ? "bg-[#1C7C54] text-white shadow-lg"
                  : "bg-white text-[#1C7C54] border border-[#1C7C54] hover:bg-gray-50"
              }`}
            >
              Bayar Via QRIS
            </button>
            <button
              onClick={() => setActiveMethod("PETUGAS")}
              className={`py-2 px-6 rounded-full font-semibold transition duration-200 ${
                activeMethod === "PETUGAS"
                  ? "bg-[#1C7C54] text-white shadow-lg"
                  : "bg-white text-[#1C7C54] border border-[#1C7C54] hover:bg-gray-50"
              }`}
            >
              Bayar Langsung ke Petugas
            </button>
          </div>

          {/* Langkah-langkah Pembayaran */}
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: greenColor }}
            >
              {activeTitle}
            </h2>

            {/* Grid Langkah-langkah: Flex wrap untuk 5 kolom responsif, gap 20px */}
            <div className="flex flex-wrap gap-[20px] justify-start">
              {activeSteps.map((step, index) => (
                <StepCard
                  key={step.id}
                  {...step}
                  // Set langkah pertama QRIS sebagai aktif
                  isActive={index === 0 && activeMethod === "QRIS"}
                />
              ))}
            </div>

            {/* Catatan Peringatan di Bawah */}
            {activeMethod === "QRIS" && (
              <div className="mt-10 p-4 border border-yellow-300 bg-yellow-50 rounded-lg flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-700">
                  Bayar hanya melalui QRIS resmi DLH. Cek kembali nama penerima
                  pada layar pembayaran sebelum konfirmasi.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}