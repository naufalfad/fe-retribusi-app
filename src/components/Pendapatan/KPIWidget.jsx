export default function KPIWidget({
  label,
  value,
  barPct = 0,
  accent = "green",
}) {
  const barColor =
    accent === "red" ? "#D03333" : accent === "amber" ? "#D6A428" : "#1C7C54";

  // Menghapus semua styling card (border, shadow, background, min-height)
  // KPIWidget sekarang hanya menjadi item di dalam card Ringkasan, yang memiliki border luarnya sendiri.
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="text-[15px] font-semibold text-[#155E3C] leading-none">
          {label}
        </div>
        <div className="mt-2 text-[18px] font-bold text-[#1F2937]">
          {fmt(value)}
        </div>
      </div>

      <div className="mt-3 h-[6px] w-full rounded-full bg-[#E8ECEF] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${Math.min(100, Math.max(0, barPct))}%`,
            background: barColor,
          }}
        />
      </div>
    </div>
  );
}

function fmt(v = 0) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(v);
}
