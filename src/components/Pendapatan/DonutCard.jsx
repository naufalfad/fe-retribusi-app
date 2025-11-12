export default function DonutCard({
  title = "Target dan Realisasi",
  percent = 0,
  target = 0,
  realized = 0,
  note = "+1.5% MoM",
  remainingPct = 0,
  updatedDate = "Hari ini",
}) {
  // Ukuran Donut
  const donutSize = 110;
  const ringWidth = 14;

  const p = clamp(percent, 0, 100);
  const R = (donutSize - ringWidth) / 2;
  const C = 2 * Math.PI * R;
  const dash = (p / 100) * C;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="text-[15px] font-semibold text-[#155E3C] leading-none">
          {title}
        </div>
        <span className="px-2 py-[2px] text-[11px] rounded-full bg-emerald-50 text-emerald-700 whitespace-nowrap">
          {note}
        </span>
      </div>

      {/* Body */}
      <div className="mt-3 grid grid-cols-[120px_1fr] gap-3">
        {/* Donut Area */}
        <div className="relative flex items-center justify-center">
          <svg
            width={donutSize}
            height={donutSize}
            viewBox={`0 0 ${donutSize} ${donutSize}`}
          >
            <g transform={`translate(${donutSize / 2}, ${donutSize / 2})`}>
              {/* Latar Belakang Cincin (Sisa Target: Abu-abu) */}
              <circle
                r={R}
                fill="none"
                stroke="#EEF2F6"
                strokeWidth={ringWidth}
              />
              {/* Progress Realisasi (Hijau) */}
              <circle
                r={R}
                fill="none"
                stroke="#1C7C54"
                strokeWidth={ringWidth}
                strokeLinecap="round"
                strokeDasharray={`${dash} ${C - dash}`}
                // Rotasi -90 agar progress dimulai dari atas (jam 12)
                transform="rotate(-90)"
              />
            </g>
          </svg>
          {/* Teks di tengah Donut */}
          <div className="absolute flex flex-col items-center justify-center">
            <div className="text-[20px] font-extrabold text-[#155E3C] leading-none">
              {p}%
            </div>
            <div className="text-[10px] text-[#6B7280] mt-[2px]">Realisasi</div>
          </div>
          {/* HAPUS DOT HIJAU EKSTRA YANG MUNCUL DI IMPLEMENTASI TERBARU */}
        </div>

        {/* Kolom detail – Perbaiki Alignment Text */}
        <div className="min-w-0 text-[12.5px] leading-tight text-[#1F2937] pt-1">
          {/* Target Tahun ini: GUNAKAN RowKV BARU DENGAN WARNA HIJAU */}
          <RowKV
            label="Target Tahun ini"
            value={fmt(target)}
            valueColor="#155E3C"
          />

          {/* Realisasi */}
          <div className="mt-1">
            <div className="font-semibold text-[#155E3C]">
              Realisasi{" "}
              <span className="text-[11px] font-normal text-black/70">
                (s/d bulan ini)
              </span>
            </div>
            {/* Realisasi nilai uang dibuat bold */}
            <div className="mt-[2px] font-semibold break-words">
              {fmt(realized)}
            </div>

            {/* Progress Bar Realisasi (di kolom detail) */}
            <div className="mt-1 h-[5px] w-full rounded-full bg-[#E8ECEF] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#1C7C54]"
                style={{
                  width: `${
                    target
                      ? Math.min(100, Math.round((realized / target) * 100))
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>

          {/* Badges */}
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Badge color="emerald">On Progress</Badge>
            <Badge color="rose">
              Sisa Target: {fmt(Math.max(0, target - realized))}
            </Badge>
          </div>
        </div>
      </div>

      {/* Footer (Legend & Catatan) */}
      <div className="mt-3 flex items-start justify-between text-[11px] text-[#6B7280]">
        {/* Legend Kiri */}
        <div className="flex flex-col min-w-0 gap-[2px] text-[10px] sm:text-[11px]">
          {/* Realisasi (Hijau) */}
          <Legend
            color="#1C7C54"
            text={`Realisasi: ${p.toFixed(0)} (${p.toFixed(1)}%)`}
          />
          {/* Sisa Target (Pink/Magenta) */}
          <Legend
            color="#F96161" // Rose 400
            text={`Sisa Target: ${100 - p} (${(100 - p).toFixed(1)}%)`}
          />
        </div>

        {/* Tanggal Pembaruan Kanan (Rata Kanan) */}
        <div className="ml-2 shrink-0 text-right text-[10px] sm:text-[11px] leading-tight">
          Data diperbarui pada tanggal
          <div className="font-medium text-black/90 mt-[1px]">
            {updatedDate}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== Helpers (Diperbarui RowKV) ===== */
function RowKV({ label, value, valueColor = "black" }) {
  // Gunakan warna dinamis untuk nilai, default black (text-[#1F2937])
  const textColor =
    valueColor === "#155E3C" ? "text-[#155E3C]" : "text-[#1F2937]";

  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-black/70 truncate">{label}</span>
      {/* Nilai uang sekarang menggunakan warna dinamis */}
      <span className={`font-semibold truncate ${textColor}`}>{value}</span>
    </div>
  );
}
function Badge({ color = "emerald", children }) {
  const map = {
    emerald: "border-emerald-600 text-emerald-700",
    rose: "border-rose-500 text-rose-600",
  };
  return (
    <span
      className={`px-[6px] py-[2px] rounded-full border ${map[color]} text-[11px]`}
    >
      {children}
    </span>
  );
}
function Legend({ color, text }) {
  return (
    <span className="inline-flex items-center gap-1 max-w-[130px] truncate">
      <span
        className="inline-block w-[9px] h-[9px] rounded-full"
        style={{ background: color }}
      />
      <span className="truncate">{text}</span>
    </span>
  );
}
function fmt(v = 0) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(v);
}
function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}
