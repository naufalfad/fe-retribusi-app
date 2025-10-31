import { useEffect, useMemo, useState } from "react";
import RevenueChart from "../components/Pendapatan/RevenueChart";
import KPIWidget from "../components/Pendapatan/KPIWidget";
import DonutCard from "../components/Pendapatan/DonutCard";
import YearSelect from "../components/Pendapatan/YearSelect";

const YEARS = [2025];

const cleanAndConvert = (str) => {
  if (typeof str === "undefined" || str === null) return 0;
  if (typeof str === "number") return str;
  const cleanString = String(str).replace(/\./g, "");
  return Number(cleanString) || 0;
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

  const fetchData = async (y) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/revenue?year=${y}`);

      if (!res.ok) {
        throw new Error(`Failed to fetch data, status: ${res.status}`);
      }

      const json = await res.json();

      const rawSeries = Array.isArray(json.series) ? json.series : [];

      const cleanSeries = rawSeries.map((item) => ({
        month: item.month,
        value: cleanAndConvert(item.value ?? item.total),
      }));

      setSeries(cleanSeries);

      setSummary({
        monthRevenue: cleanAndConvert(json.monthRevenue),
        yearRevenue: cleanAndConvert(json.yearRevenue),
        totalRevenue: cleanAndConvert(json.totalRevenue),
        targetYear: cleanAndConvert(json.targetYear),
      });
    } catch (err) {
      console.error("❌ error fetch pendapatan:", err);
      setSeries([]);
      setSummary((prev) => ({ ...prev, monthRevenue: 0, yearRevenue: 0 }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(year);
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
      {/* Container utama dengan padding 70px. Menggunakan max-w-full sebagai guardrail. */}
      <div className="w-full max-w-full pt-10 md:pt-12 lg:pt-14 pb-14 md:pb-16 lg:pb-20 px-[70px]">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#155E3C]">
            Progress Pendapatan Daerah
          </h1>
          <p className="mt-3 text-black/70 max-w-2xl mx-auto">
            Berikut ini adalah grafik data yang menunjukkan progress pendapatan
            daerah dari tahun ke tahun
          </p>
        </div>

        {/* grid utama */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-7">
          {/* Kolom Kiri: Chart */}
          <div className="rounded-[24px] border border-black/10 shadow-soft p-5 md:p-6 relative">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-black/60">Tahun {year}</div>
            </div>
            <RevenueChart data={series} loading={loading} />
          </div>

          {/* Kolom Kanan: Panel Kontrol dan Ringkasan */}
          <div>
            {/* Pilih Tahun */}
            <YearSelect
              value={year}
              onChange={setYear}
              years={YEARS}
              className="w-full max-w-none mb-4"
            />

            {/* Ringkasan */}
            <div className="grid gap-6 mt-0">
              <div className="rounded-[20px] border border-black/10 shadow-soft p-5">
                <div className="text-base font-semibold text-[#155E3C]">
                  Ringkasan
                </div>
                <div className="mt-5 space-y-4">
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

              <DonutCard
                title="Target dan Realisasi"
                target={summary.targetYear}
                realized={summary.yearRevenue}
                percent={realizationPct}
                note="+1.5% MoM"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}