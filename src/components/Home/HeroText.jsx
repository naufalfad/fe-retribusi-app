function HeroText() {
  return (
    <div className="relative z-10 text-center lg:text-left">
      <h1
        className="
          font-bold tracking-[-0.02em] leading-[1]
          text-[#125735] dark:text-green-dark
          text-[37px] sm:text-[42px] lg:text-[90px]
        "
      >
        <span className="block">Aplikasi&nbsp;Retribusi</span>
        <span className="block">Sampah</span>
      </h1>

      {/* Bagian teks bawah hanya untuk desktop */}
      <div className="hidden lg:block">
        <p className="mt-[42px] text-[30px] font-semibold leading-tight text-black dark:text-black-dark max-w-[566px]">
          Digitalisasi Pelayanan Pembayaran Retribusi Sampah Kabupaten Bogor
        </p>

        <div className="mt-6 flex items-start gap-3">
          <span className="w-[5px] h-[48px] rounded-full bg-[#125735] dark:bg-green-dark" />
          <p className="text-[16px] leading-normal text-[#125735] dark:text-green-dark max-w-[445px]">
            Solusi digital untuk pelayanan Retribusi Sampah Daerah secara mudah,
            aman, dan transparan.
          </p>
        </div>

        <div className="mt-[28px] flex gap-3">
          <a
            href="#pendaftaran"
            className="flex w-[185px] h-[41px] justify-center items-center gap-[5px]
                       rounded-[10px] bg-green dark:bg-green-dark text-white dark:text-black
                       text-[14px] font-normal leading-none hover:brightness-95 transition"
          >
            Pendaftaran Retribusi
          </a>
          <a
            href="#pembayaran"
            className="flex w-[185px] h-[41px] justify-center items-center gap-[5px]
                       rounded-[10px] bg-green dark:bg-green-dark text-white dark:text-black
                       text-[14px] font-normal leading-none hover:bg-brand/5 dark:hover:bg-brand-dark/10 transition"
          >
            Pembayaran Retribusi
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
