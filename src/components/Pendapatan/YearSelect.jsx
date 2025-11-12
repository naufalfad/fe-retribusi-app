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
          "w-full h-[53px] appearance-none cursor-pointer",
          "rounded-[15px] bg-white",
          "border border-[#B6D1C5]",
          "shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
          "pl-4 pr-10 text-[16px] font-medium text-[#333]",
          "focus:outline-none focus:ring-2 focus:ring-[#1C7C54]/30 focus:border-[#1C7C54]",
          "transition-all duration-150 ease-in-out",
        ].join(" ")}
      >
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
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-70 text-[#333]"
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
