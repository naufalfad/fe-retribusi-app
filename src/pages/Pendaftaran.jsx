import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Smartphone,
  MapPin,
  FileText,
  Phone,
  Mail,
  Map,
} from "lucide-react";

// Data Langkah-Langkah Pendaftaran
const STEPS = [
  {
    step: "Buka halaman website resmi",
    text: 'Buka halaman website resmi Retribusi Sampah Kabupaten Bogor di "retribusisampah.kabupaten.go.id".',
  },
  {
    step: "Klik menu 'Login'",
    text: "Klik menu 'Login' pada bagian kanan atas aplikasi dan akan diarahkan pada halaman login atau buat akun (jika belum).",
  },
  {
    step: "Pilih menu 'Daftar disini'",
    text: "Pilih menu 'Daftar disini' dan Anda akan diarahkan ke bagian buat akun atau bikin ID baru.",
  },
  {
    step: "Siapkan data diri/usaha",
    text: "Siapkan data diri jika anda mendaftar jenis retribusi rumah tangga, dan data badan usaha jika anda mendaftar jenis wajib retribusinya badan usaha.",
  },
  {
    step: "Isi Formulir Pendaftaran",
    text: "Pastikan data pendaftaran yang diisikan untuk membuat akun dan pastikan semuanya benar, tidak ada kesalahan penulisan atau kesalahan pilih.",
  },
  {
    step: "Submit Pendaftaran",
    text: "Pastikan semua kolom sudah diisi data isian dengan benar dan tidak ada kesalahan sama sekali.",
  },
  {
    step: "Proses Verifikasi",
    text: "Kode OTP akan dikirimkan ke nomor WhatsApp yang didaftarkan.",
  },
  {
    step: "Login ke dalam aplikasi",
    text: "Login ke dalam aplikasi dengan akun yang telah didaftarkan sebelumnya.",
  },
  {
    step: "Download Kartu Wajib Retribusi",
    text: "Download kartu wajib retribusi di dalam aplikasi retribusi.",
  },
];

// Data Persyaratan
const REQUIREMENTS = [
  {
    title: "Nomor WhatsApp Aktif",
    icon: Smartphone,
    description: "Nomor digunakan untuk notifikasi dan kode OTP.",
  },
  {
    title: "NIK/NIB",
    icon: FileText,
    description:
      "Digunakan untuk validasi data wajib retribusi rumah tangga. NIB digunakan untuk validasi data wajib retribusi badan usaha.",
  },
  {
    title: "Titik Koordinat",
    icon: MapPin,
    description:
      "Diperlukan pemutakhiran sampel pendaftaran untuk menemukan lokasi petugas.",
  },
  {
    title: "Alamat Lengkap",
    icon: Map,
    description:
      "Diperlukan verifikasi tambahan untuk memastikan titik koordinat yang diinputkan benar atau sesuai.",
  },
];

// Data FAQ
const FAQS = [
  {
    question: "Saya tidak menerima kode OTP di WhatsApp",
    answer:
      "Pastikan nomor WhatsApp Anda aktif, tidak sedang diblokir, dan memiliki koneksi internet yang baik. Tunggu beberapa saat, jika kode tidak masuk coba gunakan fitur kirim ulang OTP.",
  },
  {
    question: "Bagaimana jika titik koordinat saya salah?",
    answer:
      "Jika titik koordinat yang Anda masukkan tidak sesuai, data Anda akan diverifikasi secara manual. Kami menyarankan Anda melakukan proses verifikasi di kantor layanan.",
  },
  {
    question: "Satu nomor WhatsApp bisa digunakan di berapa akun?",
    answer:
      "Satu nomor WhatsApp hanya dapat digunakan untuk satu akun pendaftaran. Jika Anda mendaftar lebih dari satu jenis retribusi, Anda tetap harus menggunakan akun yang berbeda.",
  },
  {
    question: "Apakah pendaftaran bisa dilakukan tanpa NIK/NIB?",
    answer:
      "Tidak. NIK/NIB adalah syarat wajib untuk memvalidasi identitas pendaftar retribusi, baik rumah tangga maupun badan usaha.",
  },
  {
    question: "Saya sudah daftar tapi tidak bisa login, kenapa?",
    answer:
      "Pastikan Anda menggunakan email/nomor telepon dan kata sandi yang benar. Jika lupa kata sandi, gunakan fitur 'Lupa Kata Sandi' untuk mengatur ulang.",
  },
  {
    question: "Bagaimana jika saya selalu mengisi data saat pendaftaran?",
    answer:
      "Sistem kami didesain untuk menyimpan data pendaftaran. Coba hapus cache browser atau gunakan perangkat lain. Jika masalah berlanjut, hubungi Helpdesk kami.",
  },
];

// Komponen untuk setiap persyaratan (MERAPIHKAN TEKS)
const RequirementItem = ({ title, icon: Icon, description }) => (
  <div
    // Menggunakan flex-col dan justify-between untuk mengisi seluruh ruang vertikal
    className="flex flex-col justify-between p-5 border border-black/10 rounded-xl shadow-sm bg-gray-50/50 h-full flex-grow"
  >
    {/* Ikon dan Judul (di atas) */}
    <div className="flex items-start space-x-2 mb-2">
      <Icon className="w-5 h-5 text-[#1C7C54] flex-shrink-0" />
      {/* SUB JUDUL: Ukuran 14px */}
      <h3 className="text-[14px] font-semibold text-[#1C7C54] leading-tight">
        {title}
      </h3>
    </div>

    {/* Deskripsi (di bawah) */}
    {/* DESKRIPSI: Ukuran 12px */}
    <p className="text-[12px] text-black/70 leading-normal">{description}</p>
  </div>
);

// Komponen untuk format Langkah Pendaftaran yang unik (dengan dot besar)
const StepItem = ({ step, text }) => {
  // Styling untuk teks yang menonjol seperti tautan atau nama menu
  const highlightText = (text) => {
    // Mengubah teks yang dikelilingi kutip ganda atau URL menjadi tautan bergaya
    return text.replace(
      /(".*?"|https?:\/\/[^\s]+)/g,
      '<span class="text-[#1C7C54] font-semibold underline-offset-2">$1</span>'
    );
  };

  return (
    <div className="flex items-start space-x-2">
      {/* Dot/Titik Styling */}
      <div className="mt-[7px] w-2 h-2 bg-[#1C7C54] rounded-full flex-shrink-0" />

      {/* Konten Langkah */}
      <div className="flex flex-col space-y-1">
        {/* Sub Judul (14px) */}
        <span className="font-semibold text-black/90 text-[14px] leading-snug">
          {step}
        </span>

        {/* Deskripsi (12px) */}
        <span
          className="text-[12px] text-black/80 leading-snug"
          dangerouslySetInnerHTML={{
            __html: highlightText(text),
          }}
        />
      </div>
    </div>
  );
};

export default function Pendaftaran() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Style yang Konsisten
  const greenColor = "#1C7C54";
  const darkGreenColor = "#155E3C";

  return (
    <section className="bg-white min-h-screen">
      {/* Wrapper utama dengan padding 70px */}
      <div className="px-[70px] w-full pt-10 md:pt-12 lg:pt-14 pb-14 md:pb-16 lg:pb-20">
        {/* Header Utama */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
            style={{ color: darkGreenColor }}
          >
            Cara Mendaftar
          </h1>
          <p className="mt-3 text-lg font-medium text-black/70">
            Tahapan pendaftaran Wajib Retribusi Sampah Kabupaten Bogor
          </p>
        </div>

        {/* Grid Konten Utama: Rasio 5fr_3fr dan gap 15px */}
        <div className="grid lg:grid-cols-[5fr_3fr] gap-[15px]">
          {/* KOLOM KIRI (Langkah Pendaftaran & Bantuan) - Rasio 5fr */}
          <div>
            {/* 1. Langkah Pendaftaran */}
            <div
              className="p-6 border border-black/10 rounded-xl shadow-lg" // Fleksibel
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: greenColor }}
              >
                Langkah Pendaftaran Wajib Retribusi
              </h2>
              {/* space-y-3 untuk jarak antar item 12px */}
              <div className="space-y-3">
                {STEPS.map((item, index) => (
                  <StepItem key={index} {...item} />
                ))}
              </div>
            </div>

            {/* 2. Butuh Bantuan? (Di bawah Langkah Pendaftaran) */}
            <div
              className="mt-10 p-6 border border-black/10 rounded-xl shadow-lg" // Fleksibel
            >
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: darkGreenColor }}
              >
                Butuh Bantuan?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-[#1C7C54]" />
                  <div>
                    <div className="text-sm font-medium text-black/80">
                      Email
                    </div>
                    <div className="text-base text-black/90 font-semibold">
                      helpdesk.kabgogr@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-[#1C7C54]" />
                  <div>
                    <div className="text-sm font-medium text-black/80">
                      Kontak
                    </div>
                    <div className="text-base text-black/90 font-semibold">
                      083-2345-8880
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <div className="text-sm font-medium text-black/80 mb-1">
                    Alamat
                  </div>
                  <div className="text-base text-black/90">
                    Jl. Tegar Beriman, Kec. Cibinong, Kabupaten Bogor, Jawa
                    Barat 16914
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN (Persyaratan & FAQ) - Rasio 3fr */}
          <div>
            {/* 3. Persyaratan */}
            <div
              className="p-6 border border-black/10 rounded-xl shadow-lg" // Fleksibel
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: greenColor }}
              >
                Persyaratan
              </h2>
              {/* Grid 2 kolom di layar besar, yang kini memiliki lebih banyak ruang */}
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {REQUIREMENTS.map((req, index) => (
                  <RequirementItem key={index} {...req} />
                ))}
              </div>
            </div>

            {/* 4. FAQ Singkat (Di bawah Persyaratan) */}
            <div className="mt-10 p-6 border border-black/10 rounded-xl shadow-lg">
              {/* Pindah mb-6 ke div terluar h2 untuk pemisah yang lebih baik */}
              <h2
                className="text-2xl font-bold pb-6 border-b border-black/10 mb-6"
                style={{ color: darkGreenColor }}
              >
                FAQ Singkat
              </h2>
              <div
                className="divide-y divide-black/10" // Fleksibel
              >
                {FAQS.map((faq, index) => (
                  <div
                    key={index}
                    className="py-4 cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-base font-medium text-black/90">
                        {faq.question}
                      </span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-[#1C7C54]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-black/60" />
                      )}
                    </div>
                    {openFaqIndex === index && (
                      <p className="mt-3 text-sm text-black/70 transition-all duration-300">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}