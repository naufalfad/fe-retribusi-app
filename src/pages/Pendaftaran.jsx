// src/pages/Pendaftaran.jsx
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Smartphone,
  MapPin,
  FileText,
  Mail,
  Map,
  MessageCircle,
} from "lucide-react";

/* ------------------------ DATA ------------------------ */
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
      "Digunakan untuk validasi data wajib retribusi rumah tangga/badan usaha.",
  },
  {
    title: "Titik Koordinat",
    icon: MapPin,
    description: "Diperlukan untuk memetakan lokasi petugas.",
  },
  {
    title: "Alamat Lengkap",
    icon: Map,
    description:
      "Untuk verifikasi tambahan memastikan titik koordinat yang diinput sesuai.",
  },
];

const FAQS = [
  {
    question: "Saya tidak menerima kode OTP di WhatsApp",
    answer:
      "Pastikan nomor WhatsApp aktif, tidak diblokir, dan koneksi internet stabil. Coba kirim ulang OTP jika belum masuk.",
  },
  {
    question: "Bagaimana jika titik koordinat saya salah?",
    answer:
      "Data akan diverifikasi manual oleh petugas. Disarankan melakukan verifikasi di kantor layanan.",
  },
  {
    question: "Satu nomor WhatsApp bisa digunakan di beberapa akun?",
    answer:
      "Tidak. Satu nomor hanya dapat digunakan untuk satu akun pendaftaran.",
  },
  {
    question: "Apakah pendaftaran bisa dilakukan tanpa NIK/NIB?",
    answer:
      "Tidak. NIK/NIB merupakan syarat wajib untuk validasi identitas pendaftar.",
  },
  {
    question: "Saya sudah daftar tapi tidak bisa login, kenapa?",
    answer:
      "Pastikan email/nomor dan kata sandi benar. Jika lupa, gunakan fitur ‘Lupa Kata Sandi’.",
  },
  // Tambahan agar list cukup panjang untuk memicu scroll
  {
    question:
      "Bagaimana jika saya salah mengisi data saat melakukan pendaftaran?",
    answer:
      "Hubungi Helpdesk DLH melalui email/WhatsApp dengan menyebutkan nama dan nomor WhatsApp terdaftar. Petugas akan membantu koreksi setelah verifikasi.",
  },
];

/* ------------------------ ITEM KECIL ------------------------ */
const StepItem = ({ step, text }) => (
  <div className="relative pl-7">
    <span className="absolute left-[6px] top-[6px] w-[8px] h-[8px] rounded-full bg-[#F7CA62]" />
    <div className="space-y-[2px]">
      <div className="text-[14px] font-semibold text-green dark:text-green-dark leading-tight">
        {step}
      </div>
      <div className="text-[12px] text-black dark:text-black-dark leading-snug">
        {text}
      </div>
    </div>
  </div>
);

const RequirementItem = ({ title, icon: Icon, description }) => (
  <div className="rounded-[10px] border border-outline dark:border-outline-dark bg-fillKolom dark:bg-fillKolom-dark shadow-sm p-4">
    <div className="flex items-center gap-2 mb-[4px]">
      <Icon className="w-[18px] h-[18px] text-green dark:text-green-dark" />
      <h3 className="text-[14px] font-semibold text-green dark:text-green-dark leading-none">
        {title}
      </h3>
    </div>
    <p className="text-[12px] text-black dark:text-black-dark leading-snug">
      {description}
    </p>
  </div>
);

/* ------------------------ PAGE ------------------------ */
export default function Pendaftaran() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const toggleFaq = (i) => setOpenFaqIndex((p) => (p === i ? null : i));

  return (
    <section className="bg-background dark:bg-background-dark min-h-screen">
      <div className="px-[70px] w-full pt-10 pb-14">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[60px] md:text-5xl lg:text-6xl font-bold text-green dark:text-green-dark">
            Cara Mendaftar
          </h1>
          <p className="mt-3 text-[16px] text-black dark:text-black-dark">
            Pilih jalur pembayaran yang paling nyaman. Ikuti langkahnya satu per
            satu hingga transaksi tercatat di sistem.
          </p>
        </div>

        {/* === GRID 2 KOLOM === */}
        <div className="grid lg:grid-cols-[5fr_3fr] gap-[15px] items-stretch">
          {/* ===== KIRI: Langkah + Butuh Bantuan ===== */}
          <div className="flex flex-col gap-[15px]">
            {/* Langkah */}
            <div className="rounded-[15px] border border-outline dark:border-outline-dark bg-fillKolom dark:bg-fillKolom-dark shadow-sm p-5">
              <h2 className="text-[20px] font-semibold text-green dark:text-green-dark">
                Langkah Pendaftaran Wajib Retribusi
              </h2>
              <div className="relative mt-4">
                <div className="absolute left-[9px] top-0 bottom-0 w-px bg-[#DCE6E1]" />
                <div className="space-y-4">
                  {STEPS.map((s, i) => (
                    <StepItem key={i} {...s} />
                  ))}
                </div>
              </div>
            </div>

            {/* Butuh Bantuan */}
            <div className="rounded-[15px] border border-outline dark:border-outline-dark bg-fillKolom dark:bg-fillKolom-dark shadow-sm p-5">
              {/* Grid 12 kolom agar presisi; alamat sejajar dgn "Hubungi Helpdesk..." */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Kiri: judul + kontak */}
                <div className="md:col-span-7">
                  <h3 className="text-[18px] font-semibold text-green dark:text-green-dark">
                    Butuh Bantuan?
                  </h3>
                  <p className="text-[13px] text-teksKolom dark:text-teksKolom-dark mt-[2px]">
                    Hubungi Helpdesk DLH Kabupaten Bogor
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2">
                      <Mail className="w-[16px] h-[16px] text-black dark:text-black-dark" />
                      <span className="text-[13px] text-black dark:text-black-dark">
                        helpdesk.kabbogor@gmail.com
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <MessageCircle className="w-[16px] h-[16px] text-black dark:text-black-dark" />
                      <span className="text-[13px] text-black dark:text-black-dark">
                        0813-2345-8880
                      </span>
                    </div>
                  </div>
                </div>

                {/* Kanan: alamat (offset agar sejajar dgn paragraf "Hubungi Helpdesk...") */}
                <div className="md:col-span-5 md:self-start md:mt-[22px]">
                  <span className="block text-[12px] text-teksKolom dark:text-teksKolom-dark font-medium">
                    Alamat:
                  </span>
                  <p className="text-[12px] text-teksKolom dark:text-teksKolom-dark leading-snug mt-[1px]">
                    Jl. Tegar Beriman, Tengah, Kec. Cibinong, Kabupaten Bogor,
                    Jawa Barat 16914
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== KANAN: Persyaratan + FAQ ===== */}
          <div className="flex flex-col gap-[15px] h-full min-h-0">
            {/* Persyaratan (auto height) */}
            <div className="rounded-[15px] border border-outline dark:border-outline-dark bg-fillKolom dark:bg-fillKolom-dark shadow-sm p-5">
              <h3 className="text-[22px] font-extrabold text-green dark:text-green-dark">
                Persyaratan
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-[10px]">
                {REQUIREMENTS.map((r, i) => (
                  <RequirementItem key={i} {...r} />
                ))}
              </div>
            </div>

            {/* FAQ (flex-1 + scroll internal) */}
            <div className="rounded-[15px] border border-outline dark:border-outline-dark bg-fillKolom dark:bg-fillKolom-dark shadow-sm p-5 flex-1 min-h-0 flex flex-col">
              <h3 className="text-[20px] font-semibold text-green dark:text-green-dark">
                FAQ Singkat
              </h3>
              <div
                className="mt-2 flex-1 min-h-0 overflow-y-auto pr-1
                divide-y-[0.5px] divide-[#D9D9D9] border-t-[0.5px] border-[#D9D9D9]"
              >
                {FAQS.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => setOpenFaqIndex((p) => (p === i ? null : i))}
                    className="w-full text-left py-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] text-black dark:text-black-dark font-medium">
                        {faq.question}
                      </span>
                      {openFaqIndex === i ? (
                        <ChevronUp className="w-[16px] h-[16px] text-teksKolom dark:text-teksKolom-dark" />
                      ) : (
                        <ChevronDown className="w-[16px] h-[16px] text-teksKolom dark:text-teksKolom-dark" />
                      )}
                    </div>
                    {openFaqIndex === i && (
                      <p className="mt-2 text-[13px] text-teksKolom dark:text-teksKolom-dark leading-snug">
                        {faq.answer}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
