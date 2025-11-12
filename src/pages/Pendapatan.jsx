import { useEffect, useMemo, useState } from "react";
import RevenueChart from "../components/Pendapatan/RevenueChart";
import KPIWidget from "../components/Pendapatan/KPIWidget";
import DonutCard from "../components/Pendapatan/DonutCard";
import YearSelect from "../components/Pendapatan/YearSelect";

const YEARS = [2025];

const cleanAndConvert = (v) => {
  if (v === undefined || v === null) return 0;
  if (typeof v === "number") return v;
  return Number(String(v).replace(/\./g, "")) || 0;
};

export default function Pendapatan() {
  const [year, setYear] = useState(2025);
  const [loading, setLoading] = useState(false);
  const [series, setSeries] = useState([]);
  const [summary, setSummary] = useState({
    monthRevenue: 0,
    yearRevenue: 0,
    totalRevenue: 0,
    targetYear: 0,
  });

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const r = await fetch(`http://localhost:3000/api/revenue?year=${year}`);
        if (!r.ok) throw new Error(`status ${r.status}`);
        const j = await r.json();

        const arr = Array.isArray(j.series) ? j.series : [];
        setSeries(
          arr.map((it) => ({
            month: it.month,
            value: cleanAndConvert(it.value ?? it.total),
          }))
        );

        setSummary({
          monthRevenue: cleanAndConvert(j.monthRevenue),
          yearRevenue: cleanAndConvert(j.yearRevenue),
          totalRevenue: cleanAndConvert(j.totalRevenue),
          targetYear: cleanAndConvert(j.targetYear),
        });
      } catch (e) {
        console.error(e);
        setSeries([]);
        setSummary((p) => ({
          ...p,
          monthRevenue: 0,
          yearRevenue: 0,
          totalRevenue: 0,
        }));
      } finally {
        setLoading(false);
      }
    })();
  }, [year]);

  const realizationPct = useMemo(() => {
    if (!summary.targetYear) return 0;
    return Math.min(
      100,
      Math.round((summary.yearRevenue / summary.targetYear) * 100)
    );
  }, [summary]);

  return (
    <section className="bg-white">
      {/* padding kiri/kanan 70px persis */}
      <div className="px-[70px] pt-12 pb-20">
        {/* title sesuai desain */}
        <div className="text-center mb-10">
          <h1 className="text-[56px] font-extrabold text-[#155E3C] leading-[1.1]">
            Progress Pendapatan Daerah
          </h1>
          <p className="mt-3 text-[16.5px] text-black/70 max-w-[680px] mx-auto leading-relaxed">
            Berikut ini adalah grafik data yang menunjukkan progress pendapatan
            daerah dari tahun ke tahun
          </p>
        </div>

        {/* GRID PRESISI: 970 | 30 | 310  ; Total Height: 652px */}
        <div
          className="mx-auto"
          style={{
            width: 970 + 30 + 310, // = 1310px
            display: "grid",
            gridTemplateColumns: "970px 30px 310px",
            // Ringkasan (3 KPI) dan Donut Card
            // 53 (Tahun) | 15 (Gap) | 360 (Ringkasan 3 KPI) | 15 (Gap) | 209 (Donut Card)
            // Total height: 53 + 15 + 360 + 15 + 209 = 652px
            gridTemplateRows: "53px 15px 360px 15px 209px",
          }}
        >
          {/* CARD GRAFIK 970×652 (span 5 baris) */}
          <div
            style={{
              gridColumn: "1 / span 1",
              gridRow: "1 / span 5",
              width: 970,
              height: 652,
              borderRadius: 15,
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.10)",
              boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
              padding: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="mb-2 text-sm text-black/60">Tahun {year}</div>
            <div className="flex-1">
              <RevenueChart
                data={series}
                loading={loading}
                height={600} // 652 - padding vertikal
                yLabel="Pendapatan (Rp)"
                showTiltedTicks
              />
            </div>
          </div>

          {/* SELECT TAHUN 310×53 */}
          <div
            style={{
              gridColumn: "3 / span 1",
              gridRow: "1 / span 1",
              width: 310,
              height: 53,
            }}
          >
            <YearSelect
              value={year}
              onChange={setYear}
              years={YEARS}
              className="w-full h-full"
            />
          </div>

          {/* CARD RINGKASAN - Tanpa judul "Ringkasan" */}
          <div
            style={{
              gridColumn: "3 / span 1",
              gridRow: "3 / span 1",
              width: 310,
              height: 255, // dikurangi agar tidak kepanjangan
              borderRadius: 15,
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.10)",
              boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
            }}
            className="p-3 flex flex-col justify-center"
          >
            <div className="space-y-3">
              <KPIWidget
                label="Pendapatan Bulan ini"
                value={summary.monthRevenue}
                accent="red"
                barPct={44}
              />
              <KPIWidget
                label="Pendapatan Tahun ini"
                value={summary.yearRevenue}
                accent="amber"
                barPct={86}
              />
              <KPIWidget
                label="Total Pendapatan"
                value={summary.totalRevenue}
                accent="green"
                barPct={100}
              />
            </div>
          </div>

          {/* DONUT 310×209 (Diubah menjadi 209px) */}
          <div
            className="p-4"
            style={{
              gridColumn: "3 / span 1",
              gridRow: "5 / span 1",
              width: 310,
              height: 209, // Diubah menjadi 209px
              borderRadius: 15,
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.10)",
              boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
              overflow: "hidden",
            }}
          >
            <DonutCard
              title="Target dan Realisasi"
              percent={realizationPct}
              target={summary.targetYear}
              realized={summary.yearRevenue}
              remainingPct={100 - realizationPct}
              // Data mock untuk tanggal update
              updatedDate="15 Oktober 2025"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
