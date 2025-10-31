export default function YearSelect({
  value,
  onChange,
  years = [],
  className = "",
}) {
  const isEmpty = value === "" || value === undefined || value === null;

  return (
    <div className={`relative ${className}`}>
      <select
        aria-label="Pilih Tahun"
        value={isEmpty ? "" : value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className={[
          "h-11 w-full rounded-2xl appearance-none",
          "bg-white border border-[#D9D9D9] pl-4 pr-10",
          "focus:outline-none focus:ring-2 focus:ring-[#1C7C54]/30",
          "text-base",
          isEmpty ? "text-black/40" : "text-black/80", // abu-abu saat placeholder
        ].join(" ")}
      >
        {/* placeholder → tidak tampil di daftar (disabled + hidden) */}
        <option value="" disabled hidden>
          Pilih Tahun
        </option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      {/* chevron */}
      <svg
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-70"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
