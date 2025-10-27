import React from "react";

function HomeButton() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {/* Tombol isi (hijau, teks putih) */}
      <a
        href="#pendaftaran"
        className="flex w-[185px] h-[41px] justify-center items-center gap-[5px]
                   rounded-[10px] bg-green dark:bg-green-dark text-[white] dark:text-black text-[14px] font-normal leading-none
                   hover:brightness-95 transition"
      >
        Pendaftaran Retribusi
      </a>

      {/* Tombol outline (border hijau, teks hijau) */}
      <a
        href="#pembayaran"
        className="flex w-[185px] h-[41px] justify-center items-center gap-[5px]
                   rounded-[10px] bg-green dark:bg-green-dark text-[white] dark:text-[black] text-[14px] font-normal leading-none
                   hover:bg-brand/5 dark:hover:bg-brand-dark/10 transition"
      >
        Pembayaran Retribusi
      </a>
    </div>
  );
}

export default HomeButton;
