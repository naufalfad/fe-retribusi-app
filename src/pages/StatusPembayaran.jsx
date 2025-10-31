import StatusCard from "../components/Pembayaran/StatusCard";
import PaymentStatusIllustration from "../assets/status-pembayaran-illustration.svg";
import Billing from "../assets/billing.jpg";
import Message from "../assets/message.jpg";
import Done from "../assets/done.jpg";

const STEPS = [
  {
    id: 1,
    title: "Masukkan ID Retribusi",
    imageSrc: Billing,
  },
  {
    id: 2,
    title: "Status akan dikirimkan melalui WhatsApp",
    imageSrc: Message,
  },
  {
    id: 3,
    title: "Cek Status Selesai",
    imageSrc: Done,
  },
];

export default function StatusPembayaran() {
  // Semua state dan logika fetch/search dihapus untuk fokus frontend

  return (
    <section className="bg-background dark:bg-background-dark min-h-screen">
      <div className="px-[70px] w-full pt-10 md:pt-12 lg:pt-14 pb-14 md:pb-16 lg:pb-20">
        {/* Kontainer Utama (Teks + Ilustrasi + Steps) */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Kolom Kiri: Teks & Langkah-langkah */}
          {/* Menggunakan lg:w-7/12 untuk memberi ruang lebih pada judul */}
          <div className="lg:w-7/12">
            {/* Judul */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green dark:text-green-dark mb-4 whitespace-nowrap">
              Cek Status Pembayaran
            </h1>

            {/* Deskripsi */}
            <p className="mt-3 text-black dark:text-black-dark max-w-xl text-base text-justify">
              Memberikan kemudahan bagi wajib retribusi dalam memonitoring
              kewajiban retribusi sampah. Pengguna cukup memasukkan ID Retribusi
              pada kolom yang tersedia, kemudian sistem akan menampilkan atau
              mengirimkan hasil pengecekan melalui WhatsApp secara otomatis.
              Fitur ini membantu memastikan setiap wajib retribusi dapat
              mengetahui apakah pembayaran telah diverifikasi, masih menunggu
              proses, atau belum dilakukan, tanpa perlu datang langsung ke
              kantor layanan.
            </p>

            {/* Langkah-langkah (DIPINDAHKAN DI SINI, DI BAWAH DESKRIPSI) */}
            {/* PERBAIKAN CARD: Menggunakan grid/flex-col untuk memastikan lebar yang sama (gap-8) */}
            <div className="flex flex-col md:flex-row justify-between gap-[10px] mt-16">
              {STEPS.map((step) => (
                // Setiap langkah adalah kontainer flex-col
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center"
                >
                  {/* Kartu Gambar (239x146px) */}
                  <StatusCard
                    title={step.title}
                    imageSrc={step.imageSrc}
                    className="w-60 h-36"
                  />
                  {/* Judul di bawah Kartu */}
                  <div className="mt-4 font-normal text-[15px] text-lg text-green dark:text-green-dark">
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Ilustrasi */}
          {/* Menggunakan lg:w-5/12 */}
          <div className="lg:w-5/12 flex justify-center">
            <img
              src={PaymentStatusIllustration}
              alt="Ilustrasi Cek Status Pembayaran"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>

        {/* Form Pencarian */}
        {/* Form ini sekarang statis tanpa logika onSubmit */}
        <form className="mt-16 w-full mx-auto flex items-stretch gap-[7px]">
          {/* Input (Bentuk sendiri dengan bayangan dan border) */}
          <input
            type="text"
            placeholder="Masukkan ID Retribusi"
            // Styling input: flex-1 agar mengambil sisa ruang
            className="flex-1 font-normal text-[14px] p-4 w-[970px] h-[57px] rounded-[10px] text-lg border border-outline dark:border-outline-dark bg-fillKolom dark:bg-fillKolom-dark rounded-lg shadow-md focus:ring-0 focus:outline-none"
          />

          {/* Button Submit (Terpisah dan sesuai warna desain) */}
          <button
            type="submit"
            // Menghapus lebar tetap (w-[136px]) dan menambahkan whitespace-nowrap
            className={`flex items-center justify-center px-6 text-white dark:text-black text-[17px] font-normal transition duration-200 
                  bg-green dark:bg-green-dark hover:bg-[#155E3C] dark:hover:bg-green rounded-[10px] shadow-md h-[57px] whitespace-nowrap`}
          >
            Cek Status
          </button>
        </form>
      </div>
    </section>
  );
}
