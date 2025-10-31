// src/components/Pendapatan/RevenueChart.jsx
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function RevenueChart({ data = [], loading = false }) {
  // fallback kalau datanya kosong banget → kasih 12 data nol biar chart gak invisible
  const safeData =
    data && data.length
      ? data
      : [
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember",
        ].map((m) => ({ month: m, value: 0 }));

  return (
    <div className="h-[360px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={safeData}
          margin={{ top: 0, right: 20, bottom: 40, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="month"
            interval={0}
            angle={-25}
            textAnchor="end"
            height={55}
            tick={{ fontSize: 12, fill: "#4B5563" }}
          />
          <YAxis
            tickFormatter={(v) => `Rp ${Math.round(v / 1_000_000)}`}
            tick={{ fontSize: 12, fill: "#4B5563" }}
            width={70}
          />
          <Tooltip
            formatter={(v) => `Rp ${Number(v).toLocaleString("id-ID")}`}
            labelFormatter={(l) => l}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#7d93ff"
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
            activeDot={{ r: 6 }}
            isAnimationActive={!loading}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
