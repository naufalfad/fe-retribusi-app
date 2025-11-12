import { useEffect, useState } from "react";
import Logo from "../../assets/logo-svg.svg";
import ModeIcon from "../../assets/mode-icon.svg";

const STORAGE_KEY = "theme";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    )?.matches;
    const initialDark = saved ? saved === "dark" : !!prefersDark;
    document.documentElement.classList.toggle("dark", initialDark);
    setIsDark(initialDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-background-dark transition-colors">
      <div className="flex items-center justify-between px-4 py-3 sm:px-[70px] sm:py-4">
        {/* KIRI: Logo + (ikon mode kecil hanya mobile) + NAV */}
        <div className="flex items-center gap-[8px] sm:gap-[260px]">
          <img
            src={Logo}
            alt="Kabupaten Bogor"
            className="w-[24px] h-[29px] sm:w-[58px] sm:h-[68.94px] flex-shrink-0"
          />

          {/* Ikon mode kecil — hanya mobile */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="block sm:hidden w-[16px] h-[16px]"
            title={isDark ? "Light mode" : "Dark mode"}
          >
            <img
              src={ModeIcon}
              alt="Mode"
              className="w-full h-full dark:invert"
            />
          </button>

          {/* NAVBAR */}
          {/* ml kecil hanya di mobile; desktop kembali 0 */}
          <nav className="ml-[8px] sm:ml-0">
            <ul className="flex items-center gap-[19px] sm:gap-[40px] text-[10px] sm:text-[17px] font-normal text-black dark:text-white">
              <li>
                <a href="#beranda">Home</a>
              </li>
              <li>
                <a href="#informasi">Informasi</a>
              </li>
              <li>
                <a href="#cekstatus">Cek Status</a>
              </li>

              {/* Desktop: tampil penuh */}
              <li className="hidden sm:list-item">
                <a href="#caramendaftar">Cara Mendaftar</a>
              </li>
              <li className="hidden sm:list-item">
                <a href="#carabayar">Cara Pembayaran</a>
              </li>
              <li className="hidden sm:list-item">
                <a href="#pendapatan">Pendapatan</a>
              </li>

              {/* Mobile: Lainnya */}
              <li className="relative sm:hidden">
                <button
                  type="button"
                  onClick={() => setOpenMore((v) => !v)}
                  className="flex items-center gap-[4px]"
                  aria-haspopup="menu"
                  aria-expanded={openMore}
                >
                  Lainnya
                  <svg
                    className={`w-[10px] h-[10px] transition-transform ${
                      openMore ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {openMore && (
                  <div
                    role="menu"
                    className="absolute left-0 top-[20px] min-w-[150px] rounded-[8px] border border-black/10 bg-white dark:bg-[#1a1a1a] shadow-md py-2 z-50"
                  >
                    <a
                      role="menuitem"
                      href="#caramendaftar"
                      className="block px-3 py-2 text-[10px] hover:bg-black/5 dark:hover:bg-white/10"
                    >
                      Cara Mendaftar
                    </a>
                    <a
                      role="menuitem"
                      href="#carabayar"
                      className="block px-3 py-2 text-[10px] hover:bg-black/5 dark:hover:bg-white/10"
                    >
                      Cara Pembayaran
                    </a>
                    <a
                      role="menuitem"
                      href="#pendapatan"
                      className="block px-3 py-2 text-[10px] hover:bg-black/5 dark:hover:bg-white/10"
                    >
                      Pendapatan
                    </a>
                    <a
                      role="menuitem"
                      href="#login"
                      className="block px-3 py-2 text-[10px] hover:bg-black/5 dark:hover:bg-white/10"
                    >
                      Login
                    </a>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>

        {/* KANAN: ikon mode besar + tombol Masuk — hanya desktop */}
        <div className="hidden sm:flex items-center gap-[27px]">
          <button
            type="button"
            onClick={toggleTheme}
            className="w-[30.25px] h-[30.25px]"
            aria-label="Toggle theme"
            title={isDark ? "Light mode" : "Dark mode"}
          >
            <img
              src={ModeIcon}
              alt="Mode"
              className="w-full h-full dark:invert"
            />
          </button>

          <button
            type="button"
            className="flex w-[87px] h-[38px] px-[21px] py-[2px] justify-center items-center gap-[10px]
                   rounded-[7px] bg-green text-white text-[17px] font-normal
                   hover:brightness-95 dark:bg-green-dark dark:text-black transition"
          >
            Masuk
          </button>
        </div>
      </div>
    </header>
  );
}
