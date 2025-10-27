import { useEffect, useState } from "react";
import Logo from "../../assets/logo-bogor.png";
import ModeIcon from "../../assets/mode-icon.svg"; // ikon SVG hasil export Figma-mu

const STORAGE_KEY = "theme"; // 'light' | 'dark'

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  // inisialisasi tema saat load
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")?.matches;
    const initialDark = saved ? saved === "dark" : !!prefersDark;
    document.documentElement.classList.toggle("dark", initialDark);
    setIsDark(initialDark);
  }, []);

  // toggle saat ikon diklik
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  };

  return (
    <header className="w-full bg-[white] dark:bg-[black] transition-colors">
      {/* gunakan px-[70px] untuk margin kiri-kanan */}
      <div className="flex items-center justify-between px-[70px] py-4">
        {/* kiri: logo + menu */}
        <div className="flex items-center gap-[163px]">
          {/* logo */}
          <img
            src={Logo}
            alt="Kabupaten Bogor"
            className="w-[58px] h-[68.943px] flex-shrink-0 aspect-[58/68.94]"
          />

          {/* navbar links */}
          <nav>
            <ul className="flex items-center gap-[40px]">
              <li>
                <a
                  href="#beranda"
                  className="text-[black] dark:text-[white] text-[17px] font-normal leading-normal whitespace-nowrap"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#informasi"
                  className="text-[black] dark:text-[white] text-[17px] font-normal leading-normal whitespace-nowrap"
                >
                  Informasi Retribusi
                </a>
              </li>
              <li>
                <a
                  href="#cekstatus"
                  className="text-[black] dark:text-[white] text-[17px] font-normal leading-normal whitespace-nowrap"
                >
                  Cek Status
                </a>
              </li>
              <li>
                <a
                  href="#caramendaftar"
                  className="text-[black] dark:text-[white] text-[17px] font-normal leading-normal whitespace-nowrap"
                >
                  Cara Mendaftar
                </a>
              </li>
              <li>
                <a
                  href="#carabayar"
                  className="text-[black] dark:text-[white] text-[17px] font-normal leading-normal whitespace-nowrap"
                >
                  Cara Pembayaran
                </a>
              </li>
              <li>
                <a
                  href="#pendapatan"
                  className="text-[black] dark:text-[white] text-[17px] font-normal leading-normal whitespace-nowrap"
                >
                  Pendapatan
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* kanan: ikon (klik-able) + tombol login */}
        <div className="flex items-center gap-[27px]">
          {/* gunakan ikon yang sama, dibuat clickable */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-[30.25px] h-[30.25px] flex-shrink-0"
            title={isDark ? "Light mode" : "Dark mode"}
          >
            <img
              src={ModeIcon}
              alt="Mode"
              className="w-[30.25px] h-[30.25px] flex-shrink-0 dark:invert"
            />
          </button>

          {/* tombol login */}
          <button
            type="button"
            className="flex w-[87px] h-[38px] px-[21px] py-[2px] justify-center items-center gap-[10px]
                       rounded-[7px] bg-green text-[white] text-[17px] font-normal leading-normal
                       hover:brightness-95 dark:bg-green-dark dark:text-[black] transition"
          >
            Masuk
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
