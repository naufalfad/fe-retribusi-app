import React from "react";
import StatCard from "./StatCard";

function InfoIntro({ illustrationSrc, stats }) {
  const darkGreenColor = "#1C7C54";

  const handleStatClick = (label) => {
    console.log(`Statistik diklik: ${label}`);
  };

  return (
    // items-start biar 2 kolomnya mulai dari atas
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 items-start pt-12 pb-4">
      {/* Kolom Kiri: Ilustrasi */}
      <div
        className="
          flex
          justify-center
          lg:justify-start
          items-start           /* ⬅️ ini penting */
        "
      >
        <img
          src={illustrationSrc}
          alt="Ilustrasi Informasi Retribusi"
          className="
    relative
    w-full
    max-w-lg
    h-auto
    lg:-mr-16
    self-start
    lg:-mt-12
  "
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x300/1C7C54/FFFFFF?text=Ilustrasi";
          }}
        />
      </div>

      {/* Kolom Kanan: Teks & Statistik */}
      <div className="pt-0 lg:-ml-10 xl:-ml-20">
        <h2 className="text-[60px] font-bold leading-tight text-green dark:text-green-dark">
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

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-[6px]">
          {stats.map((item, index) => (
            <StatCard
              key={index}
              value={item.value}
              label={item.label}
              sublabel={item.sublabel}
              onClick={() => handleStatClick(item.label)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoIntro;
