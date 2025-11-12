import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";

/**
 * Props:
 * - data: [{ month, value }]
 * - loading: boolean
 * - height: number (px) → default 600 agar pas dengan kartu 652 (padding 20)
 * - yLabel: string → "Pendapatan (Rp)"
 * - showTiltedTicks: boolean → miringkan label bulan
 */
export default function RevenueChart({
  data = [],
  loading = false,
  height = 600,
  yLabel = "",
  showTiltedTicks = true,
}) {
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
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={safeData}
          margin={{ top: 8, right: 16, bottom: 70, left: 16 }} // ruang bawah untuk label miring
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
            tickFormatter={(v) => v.toLocaleString("id-ID")}
            tick={{ fontSize: 12, fill: "#4B5563" }}
            width={100} // ruang kiri biar tidak mepet
          >
            <Label
              value={yLabel}
              angle={-90}
              position="insideLeft"
              offset={-5}
              style={{ fill: "#6B7280", fontSize: 12 }}
            />
          </YAxis>
          <Tooltip
            formatter={(v) => `Rp ${Number(v).toLocaleString("id-ID")}`}
            labelFormatter={(l) => l}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#7D93FF"
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 2, fill: "#fff", stroke: "#7D93FF" }}
            activeDot={{ r: 6 }}
            isAnimationActive={!loading}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
