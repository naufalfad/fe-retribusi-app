import React from "react";

function StatCard({ value, label, sublabel }) {
  // Menggunakan dimensi yang diminta: w-215px, h-119px
  return (
    <div
      className="flex flex-col justify-center p-4 rounded-xl shadow-sm ring-1 ring-outline/30 dark:ring-outline-dark/40"
      style={{
        width: "215px",
        height: "119px",
        gap: "2px",
        backgroundColor: "var(--fillKolom, #fff)",
      }}
    >
      {/* Nilai Utama */}
      <h3 className="text-[28px] font-extrabold text-brand dark:text-brand-dark">
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
