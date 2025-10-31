import React from "react";

function StatCard({ value, label, sublabel, onClick }) {
  // Gunakan variabel CSS untuk warna hijau
  const greenColor = "var(--brand, #1C7C54)";

  return (
    // Menambahkan styling untuk interaksi: cursor-pointer, transition, hover:scale, active:scale
    <div
      onClick={onClick}
      className="p-4 rounded-xl shadow-lg flex flex-col justify-center cursor-pointer 
                 transition duration-300 ease-in-out transform
                 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]
                 border border-black/10 dark:border-white/10 // Mengatasi outline putih
                 "
      style={{
        width: "215px",
        height: "119px",
        gap: "2px",
        backgroundColor: "var(--fillKolom, #fff)",
      }}
    >
      {/* Nilai Utama */}
      <h3
        className="text-[28px] font-extrabold text-brand dark:text-brand-dark"
        style={{ color: greenColor }}
      >
        {value}
      </h3>
      {/* Label (wajib retribusi...) */}
      <p className="mt-1 text-[14px] font-medium leading-tight text-ink dark:text-ink-dark">
        {label}
      </p>
      {/* Sublabel (rumah tangga terdaftar/badan usaha...) */}
      <p className="text-[12px] leading-tight text-ink/70 dark:text-ink-dark/70">
        {sublabel}
      </p>
    </div>
  );
}

export default StatCard;