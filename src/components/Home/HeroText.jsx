import React from "react";

function HeroText() {
  return (
    <div className="relative z-10 space-y-6">
      {/* Baris 1 dan Baris 2 */}
      <h1
        className="
          font-bold tracking-[-0.02em] leading-[0.95]
          text-[#125735] dark:text-green-dark
          text-[42px] sm:text-[60px] lg:text-[90px]
          max-w-none
        "
      >
        {/* Paksa 1 baris di layar besar */}
        <span className="block lg:inline-block lg:whitespace-nowrap">
          Aplikasi&nbsp;Retribusi
        </span>
        <span className="block">Sampah</span>
      </h1>

      {/* Subjudul – pastikan tidak ketiban ilustrasi */}
      <p
        className="
          mt-[42px] text-[30px] sm:text-[24px] lg:text-[30px]
          font-semibold leading-tight
          text-[black] dark:text-black-dark text-[42px]
          max-w-[566px]
        "
      >
        Digitalisasi Pelayanan Pembayaran Retribusi Sampah Kabupaten Bogor
      </p>

      {/* Teks kecil + garis */}
      <div className="mt-6 flex items-start gap-3">
        <span className="w-[5px] h-[48px] flex-shrink-0 rounded-full bg-[#125735] dark:bg-green-dark" />
        <p className="text-[16px] font-normal leading-normal text-[#125735] dark:text-green-dark max-w-[445px]">
          Solusi digital untuk pelayanan Retribusi Sampah Daerah secara mudah,
          aman, dan transparan.
        </p>
      </div>
    </div>
  );
}

export default HeroText;
