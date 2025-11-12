import React from "react";

function StatCard({ value, label, sublabel, onClick }) {
  const greenColor = "var(--brand, #1C7C54)";

  // cek apakah ini card pendapatan
  const isRevenue =
    typeof value === "string" &&
    (value.startsWith("Rp.") || label?.toLowerCase().includes("pendapatan"));

  // hitung panjang angka (tanpa spasi)
  const plainValue =
    typeof value === "string" ? value.replace(/\s+/g, "") : String(value);
  const valueLength = plainValue.length;

  // fungsi pilih ukuran font berdasarkan panjang angka
  const getValueClass = () => {
    if (isRevenue) {
      // khusus card Rp.
      if (valueLength > 18) return "text-[18px]";
      if (valueLength > 14) return "text-[20px]";
      return "text-[25px]";
    }

    // card Wajib Retribusi (bukan Rp.)
    if (valueLength <= 6) return "text-[45px]";
    if (valueLength <= 9) return "text-[38px]";
    if (valueLength <= 12) return "text-[32px]";
    if (valueLength <= 15) return "text-[28px]";
    return "text-[24px]"; // super panjang, jaga biar tetap muat
  };

  return (
    <div
      onClick={onClick}
      className="
        w-full
        rounded-xl
        shadow-lg
        border border-outline dark:border-outline-dark
        bg-fillKolom dark:bg-fillKolom-dark
        flex flex-col items-center justify-center
        text-center
        gap-1
        py-4
        transition duration-300 ease-in-out transform
        hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]
      "
    >
      {/* Nilai */}
      <h3
        className={`${getValueClass()} font-extrabold text-green dark:text-green-dark leading-none break-words`}
      >
        {value}
      </h3>

      {/* Label */}
      <p className="mt-2 text-[12px] font-medium leading-tight text-teksKolom dark:text-teksKolom-dark">
        {label}
      </p>

      {/* Sublabel */}
      <p className="text-[12px] leading-tight text-teksKolom dark:text-teksKolom-dark">
        {sublabel}
      </p>
    </div>
  );
}

export default StatCard;
