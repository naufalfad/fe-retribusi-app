import React from "react";
// Asumsi Anda menggunakan ikon SVG atau komponen gambar di sini,
// namun kita fokus pada styling container.

// Asumsi prop: { title, imageSrc, description }
export default function StatusCard({ title, imageSrc, description }) {
  const greenColor = "#1C7C54";

  return (
    // Menambahkan styling animasi dan interaksi
    <div
      className="flex flex-col items-center text-center w-full transition duration-300 ease-in-out transform cursor-pointer
                    hover:scale-[1.05] active:scale-[0.98]
                    "
    >
      {/* Kartu Gambar (239x146px) */}
      <div
        className="rounded-2xl shadow-xl overflow-hidden mb-4 border border-black/10 dark:border-white/10"
        style={{ width: "239px", height: "146px" }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Judul */}
      <div className="text-[15px] font-semibold text-[#1C7C54] mb-1 leading-snug">
        {title}
      </div>

      {/* Deskripsi (Tidak ditampilkan di mockup, tapi disertakan jika diperlukan) */}
      {description && (
        <p className="text-sm text-black/70 max-w-[200px]">{description}</p>
      )}
    </div>
  );
}