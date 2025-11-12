import Navbar from "../components/Home/Navbar";
import HeroText from "../components/Home/HeroText";
import Illustration from "../components/Home/Illustration";

function Home() {
  return (
    <>
      <Navbar className="bg-background dark:bg-background-dark sticky top-0 z-50 shadow-sm" />

      <main className="bg-background dark:bg-background-dark">
        <section
          id="beranda"
          className="mx-auto w-full px-5 sm:px-8 lg:px-[70px] pt-8 sm:pt-12 lg:pt-20"
        >
          <div
            className="mx-auto lg:mx-0 grid grid-cols-1 lg:grid-cols-2 items-start
                       gap-6 sm:gap-8 lg:gap-10 max-w-[420px] sm:max-w-[520px] lg:max-w-none"
          >
            {/* 1️⃣ Judul */}
            <div className="order-1 lg:order-none">
              <HeroText />
            </div>

            {/* 2️⃣ Gambar */}
            <div className="order-2 lg:order-none">
              <Illustration />
            </div>

            {/* 3️⃣ Teks & tombol untuk mobile */}
            <div className="order-3 lg:hidden mt-4">
              {/* Hitam 15px */}
              <p className="text-[15px] font-semibold leading-snug text-black dark:text-black-dark">
                Digitalisasi Pelayanan Pembayaran Retribusi Sampah Kabupaten
                Bogor
              </p>

              {/* Hijau 10px + garis */}
              <div className="mt-2 flex items-start gap-2">
                <span className="w-[3px] h-[26px] rounded-full bg-[#125735] dark:bg-green-dark" />
                <p className="text-[10px] leading-normal text-[#125735] dark:text-green-dark">
                  Solusi digital untuk pelayanan Retribusi Sampah Daerah secara
                  mudah, aman, dan transparan.
                </p>
              </div>

              {/* Tombol kecil (121×23) sejajar kiri sempurna, radius 5px, font normal */}
              <div className="mt-3 flex justify-start gap-2 -ml-[3px]">
                <a
                  href="#pendaftaran"
                  className="flex w-[121px] h-[23px] justify-center items-center
               rounded-[5px] bg-green dark:bg-green-dark text-white dark:text-black
               text-[9px] font-normal leading-none hover:brightness-95 transition"
                >
                  Pendaftaran Retribusi
                </a>

                <a
                  href="#pembayaran"
                  className="flex w-[121px] h-[23px] justify-center items-center
               rounded-[5px] bg-green dark:bg-green-dark text-white dark:text-black
               text-[9px] font-normal leading-none hover:bg-brand/5 dark:hover:bg-brand-dark/10 transition"
                >
                  Pembayaran Retribusi
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
