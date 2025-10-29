import React, { useState } from "react";
import { FaHome, FaUser, FaPhone, FaMapMarkerAlt, FaIdCard, } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, useMapEvents, } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import registerIllustration from '../assets/register-illustration.png'

// Custom icon untuk marker
const markerIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

function ClickableMap({ setPosition }) {
    useMapEvents({
        click(e) {
            setPosition(e.latlng);
        },
    });
    return null;
}

const Register = () => {
    const [jenisRetribusi, setJenisRetribusi] = useState("");
    const [layanan, setLayanan] = useState("");
    const [position, setPosition] = useState({
        lat: -6.597146, // Default: Bogor
        lng: 106.806039,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            jenisRetribusi,
            layanan,
            latitude: position.lat,
            longitude: position.lng,
        };

        console.log("Data terkirim:", data);
        alert(
            `Registrasi berhasil!\nKoordinat: ${position.lat.toFixed(
                6
            )}, ${position.lng.toFixed(6)}`
        );
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen font-poppins">
            {/* Kiri */}
            <div className="hidden md:flex md:w-[45%] bg-[#0C513F] fixed h-screen left-0 top-0 items-center justify-center">
                <img
                    src={registerIllustration}
                    alt="Ilustrasi Daftar"
                    className="w-[80%] max-w-[420px] object-contain"
                />
            </div>

            {/* Kanan */}
            <div
                className="md:ml-[45%] md:w-[55%] bg-white flex flex-col p-6 md:p-10 overflow-y-auto h-screen" style={{ scrollBehavior: "smooth" }}>
                <div className="max-w-xl mx-auto mt-10 mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0C513F] mb-2">
                        Mendaftar Wajib Retribusi
                    </h1>
                    <p className="text-[#387B56] mb-8">
                        Isi formulir dengan benar dan pastikan tidak ada yang salah saat mengisi
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Jenis Wajib Retribusi */}
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Jenis Wajib Retribusi</p>
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaHome className="text-green-700 mr-3" />
                                <select
                                    value={jenisRetribusi}
                                    onChange={(e) => setJenisRetribusi(e.target.value)}
                                    className="flex-1 outline-none bg-transparent text-gray-700"
                                >
                                    <option value="">Pilih Jenis Wajib Retribusi</option>
                                    <option value="rumah_tangga">Rumah Tangga</option>
                                    <option value="usaha">Usaha</option>
                                </select>
                            </div>
                        </div>

                        {/* Identitas Pribadi */}
                        <p className="text-sm text-gray-600 border-t pt-3">Identitas Pribadi</p>

                        <div className="space-y-4">
                            {/* NIK */}
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaIdCard className="text-green-700 mr-3" />
                                <input
                                    type="text"
                                    placeholder="NIK"
                                    className="flex-1 outline-none text-gray-700"
                                />
                            </div>

                            {/* Nama */}
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaUser className="text-green-700 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Nama Lengkap"
                                    className="flex-1 outline-none text-gray-700"
                                />
                            </div>

                            {/* WhatsApp */}
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaPhone className="text-green-700 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Nomor WhatsApp"
                                    className="flex-1 outline-none text-gray-700"
                                />
                            </div>

                            {/* Alamat */}
                            <div className="border border-green-700 rounded-lg flex items-start px-4 py-3">
                                <FaMapMarkerAlt className="text-green-700 mr-3 mt-1" />
                                <textarea
                                    placeholder="Alamat Lengkap"
                                    rows="2"
                                    className="flex-1 outline-none text-gray-700 resize-none"
                                ></textarea>
                            </div>
                        </div>

                        {/* Layanan */}
                        <p className="text-sm text-gray-600 border-t pt-3">Layanan</p>
                        <div className="space-y-4">
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaHome className="text-green-700 mr-3" />
                                <select
                                    value={layanan}
                                    onChange={(e) => setLayanan(e.target.value)}
                                    className="flex-1 outline-none bg-transparent text-gray-700"
                                >
                                    <option value="">Pilih Layanan</option>
                                    <option value="pengangkutan">Pengangkutan Sampah</option>
                                    <option value="kebersihan">Kebersihan Lingkungan</option>
                                </select>
                            </div>

                            {/* Titik Pemungutan */}
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaMapMarkerAlt className="text-green-700 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Titik Pemungutan"
                                    value={`Lat: ${position.lat.toFixed(6)}, Lng: ${position.lng.toFixed(6)}`}
                                    readOnly
                                    className="flex-1 outline-none text-gray-700"
                                />
                            </div>
                        </div>

                        {/* Peta Interaktif */}
                        <div className="mt-3">
                            <p className="text-xs text-gray-500 mb-2">
                                *Klik peta untuk menentukan titik pemungutan
                            </p>
                            <MapContainer
                                center={position}
                                zoom={14}
                                scrollWheelZoom={true}
                                style={{
                                    height: "250px",
                                    width: "100%",
                                    borderRadius: "10px",
                                    border: "1px solid #166534",
                                }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                />
                                <Marker position={position} icon={markerIcon}></Marker>
                                <ClickableMap setPosition={setPosition} />
                            </MapContainer>

                            <div className="flex justify-between text-sm text-gray-600 mt-2">
                                <span>Latitude: {position.lat.toFixed(6)}</span>
                                <span>Longitude: {position.lng.toFixed(6)}</span>
                            </div>
                        </div>

                        {/* Tombol */}
                        <button
                            type="submit"
                            className="w-full bg-[#0C513F] text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition mt-6"
                        >
                            Daftar Retribusi
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
