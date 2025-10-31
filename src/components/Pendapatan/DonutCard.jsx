export default function DonutCard({
  title,
  percent = 0,
  target = 0,
  realized = 0,
  note,
}) {
  const R = 60; // radius
  const C = 2 * Math.PI * R;
  const p = Math.min(100, Math.max(0, percent));
  const dash = (p / 100) * C;

  return (
    <div className="rounded-[20px] border border-black/10 shadow-soft p-5">
      <div className="text-base font-semibold text-[#155E3C] mb-3">{title}</div>

      <div className="grid grid-cols-[170px_1fr] items-center gap-4">
        {/* Donut */}
        <svg width="170" height="170" viewBox="0 0 170 170">
          <g transform="translate(85,85)">
            <circle r={R} fill="none" stroke="#eef2f6" strokeWidth="18" />
            <circle
              r={R}
              fill="none"
              stroke="#1C7C54"
              strokeWidth="18"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${C - dash}`}
              transform="rotate(-90)"
            />
            <text
              textAnchor="middle"
              dy="8"
              fontSize="28"
              fontWeight="800"
              fill="#155E3C"
            >
              {p}%
            </text>
            <text textAnchor="middle" dy="28" fontSize="12" fill="#6b7280">
              Realisasi
            </text>
          </g>
        </svg>

        {/* Detail kanan */}
        <div className="space-y-2">
          {note && (
            <span className="inline-block px-2 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700">
              {note}
            </span>
          )}

          <div className="grid gap-1 text-sm">
            <Row left="Target Tahun ini" right={fmt(target)} />
            <Row left="Realisasi (s/d bulan ini)" right={fmt(realized)} />
            <Row
              left="Sisa Target"
              right={fmt(Math.max(0, target - realized))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ left, right }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-black/70">{left}</span>
      <span className="font-semibold">{right}</span>
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
