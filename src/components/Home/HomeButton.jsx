function HomeButton() {
  return (
    <div className="mt-6 sm:mt-8 lg:mt-[70px] flex flex-wrap justify-center lg:justify-start gap-2">
      <a
        href="#pendaftaran"
        className="flex w-[185px] h-[41px] justify-center items-center gap-[5px]
                   rounded-[10px] bg-green dark:bg-green-dark text-white dark:text-black
                   text-[13px] sm:text-[14px] leading-none font-normal
                   hover:brightness-95 transition"
      >
        Pendaftaran Retribusi
      </a>

      <a
        href="#pembayaran"
        className="flex w-[185px] h-[41px] justify-center items-center gap-[5px]
                   rounded-[10px] bg-green dark:bg-green-dark text-white dark:text-black
                   text-[13px] sm:text-[14px] leading-none font-normal
                   hover:bg-brand/5 dark:hover:bg-brand-dark/10 transition"
      >
        Pembayaran Retribusi
      </a>
    </div>
  );
}

export default HomeButton;
