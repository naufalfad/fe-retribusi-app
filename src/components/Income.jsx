import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const Income = () => {
    const data = [
        { bulan: "Jan", pendapatan: 10 },
        { bulan: "Feb", pendapatan: 20 },
        { bulan: "Mar", pendapatan: 25 },
        { bulan: "Apr", pendapatan: 35 },
        { bulan: "Mei", pendapatan: 40 },
        { bulan: "Jun", pendapatan: 50 },
        { bulan: "Jul", pendapatan: 55 },
        { bulan: "Agu", pendapatan: 60 },
        { bulan: "Sep", pendapatan: 65 },
        { bulan: "Okt", pendapatan: 70 },
        { bulan: "Nov", pendapatan: 80 },
        { bulan: "Des", pendapatan: 95 },
    ];

    return (
        <section id="pendapatan" className="max-w-6xl mx-auto p-6 mt-16">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-green-900">
                    Progress Pendapatan Daerah
                </h1>
                <p className="text-gray-700">
                    Berikut ini adalah grafik data yang menunjukkan progress pendapatan
                    daerah dari tahun ke tahun
                </p>
            </header>

            {/* Statistik Pendapatan */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white shadow-md rounded-xl p-5">
                    <p className="text-sm text-gray-600">Pendapatan Bulan Ini</p>
                    <h2 className="text-2xl font-bold text-green-900 mt-1">
                        Rp. 10.000.000
                    </h2>
                </div>
                <div className="bg-white shadow-md rounded-xl p-5">
                    <p className="text-sm text-gray-600">Pendapatan Tahun Ini</p>
                    <h2 className="text-2xl font-bold text-green-900 mt-1">
                        Rp. 95.590.000
                    </h2>
                </div>
                <div className="bg-white shadow-md rounded-xl p-5">
                    <p className="text-sm text-gray-600">Total Pendapatan</p>
                    <h2 className="text-2xl font-bold text-green-900 mt-1">
                        Rp. 356.780.690
                    </h2>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-10 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">
                    Realisasi Target Pendapatan
                </h3>
                <div className="w-full bg-green-100 h-5 rounded-full overflow-hidden">
                    <div
                        className="bg-green-600 h-5 rounded-full text-right pr-2 text-white text-xs flex items-center justify-end"
                        style={{ width: "70%" }}
                    >
                        70%
                    </div>
                </div>
                <div className="mt-3 grid sm:grid-cols-3 gap-2 text-sm text-gray-700">
                    <div>
                        <b>Realisasi:</b> Rp. 70.000.000
                    </div>
                    <div>
                        <b>Sisa Target:</b> Rp. 30.000.000
                    </div>
                    <div>
                        <b>Target Tahun Ini:</b> Rp. 100.000.000
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                    Data diperbarui pada tanggal: 15 Oktober 2025
                </p>
            </div>

            {/* Grafik */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-10">
                <h3 className="text-lg font-semibold text-green-900 mb-4">
                    Grafik Target dan Realisasi (Tahun 2025)
                </h3>
                <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="bulan" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="pendapatan" fill="#1b5e20" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Kontak dan Sosial Media */}
            <div className="bg-green-900 text-white rounded-xl mt-10 p-6 flex flex-col md:flex-row justify-between items-start gap-6">
                <div>
                    <h3 className="text-lg font-semibold">Kontak & Media Sosial</h3>
                    <p className="text-sm mt-1">DLH Kabupaten Bogor</p>
                    <p className="text-sm mt-1">
                        Alamat: Jl. Tegar Beriman, Tengah, Kec. Cibinong, Kabupaten Bogor,
                        Jawa Barat 16914
                    </p>
                </div>
                <div>
                    <p className="text-sm mb-2 font-semibold">Ikuti Media Sosial Kami</p>
                    <p>@dlh_kabbogor</p>
                    <p>DLH Kabupaten Bogor</p>
                </div>
            </div>
        </section>
    );
};

export default Income;