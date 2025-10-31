import React from "react";
import StatCard from "./StatCard";
// Asumsi: RequirementItem juga diimport jika digunakan di sini

function InfoIntro({ illustrationSrc, stats }) {
  // Warna hijau yang konsisten
  const darkGreenColor = "#1C7C54";

  // Fungsi placeholder untuk onClick
  const handleStatClick = (label) => {
    console.log(`Statistik diklik: ${label}`);
  };

  return (
    // Menggunakan rasio 2 kolom sama rata (50/50) dengan gap yang sangat kecil
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 items-start py-12">
      {/* Kolom Kiri: Ilustrasi */}
      <div className="flex justify-center lg:justify-start">
        <img
          src={illustrationSrc}
          alt="Ilustrasi Informasi Retribusi"
          // Menambahkan margin negatif di KANAN agar ilustrasi menjorok ke kolom KANAN
          className="relative w-full max-w-lg h-auto flex justify-start lg:-mr-16"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x300/1C7C54/FFFFFF?text=Ilustrasi";
          }}
        />
      </div>

      {/* Kolom Kanan: Teks & Statistik */}
      <div className="pt-8">
        <h2
          className="text-[60px] md:text-[46px] font-bold leading-tight"
          style={{ color: darkGreenColor }}
        >
          Informasi Retribusi
        </h2>

        <p className="text-justify text-[16px] font-normal leading-normal text-black dark:text-black-dark w-full md:w-[577px] mt-4">
          Aplikasi Retribusi Sampah adalah platform digital untuk mempermudah
          masyarakat mengelola dan membayar retribusi sampah secara online —
          mulai dari pendaftaran, pengecekan tagihan, hingga melihat riwayat
          pembayaran. Dilengkapi notifikasi pengingat, pelaporan, dan integrasi
          sistem pengelolaan sampah daerah agar layanan lebih efisien,
          transparan, dan terhubung secara digital.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {stats.map((item, index) => (
            <StatCard
              key={index}
              value={item.value}
              label={item.label}
              sublabel={item.sublabel}
              // Tambahkan onClick handler
              onClick={() => handleStatClick(item.label)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoIntro;
