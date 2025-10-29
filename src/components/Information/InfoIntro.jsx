import React from "react";
import StatCard from "./StatCard";

function InfoIntro({ illustrationSrc, stats }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      {/* Ilustrasi */}
      <div className="flex justify-center lg:justify-start">
        <img
          src={illustrationSrc}
          alt="Ilustrasi Informasi Retribusi"
          className="relative -ml-8 md:-ml-10 lg:-ml-12 flex justify-start"
        />
      </div>

      {/* Teks */}
      <div>
        <h2 className="text-[60px] md:text-[46px] font-bold leading-tight">
          Informasi Retribusi
        </h2>

        <p className="text-justify text-[16px] font-normal leading-normal text-black dark:text-black-dark w-full md:w-[577px]">
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoIntro;
