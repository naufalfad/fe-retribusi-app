export default function KPIWidget({
  label,
  value,
  barPct = 0,
  accent = "green",
}) {
  const color =
    accent === "red" ? "#CE3B3B" : accent === "amber" ? "#D6A428" : "#1C7C54";

  return (
    <div className="rounded-[16px] border border-black/10 p-4 md:p-5">
      <div className="text-[15px] text-black/70">{label}</div>
      <div className="text-[26px] md:text-[28px] font-extrabold text-[#155E3C] mt-1">
        {fmt(value)}
      </div>
      <div className="mt-3 h-[6px] rounded-full bg-[#E8ECEF] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${Math.min(100, Math.max(0, barPct))}%`,
            background: color,
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
