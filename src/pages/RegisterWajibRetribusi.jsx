import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHome, FaUser, FaPhone, FaMapMarkerAlt, FaIdCard, FaMoneyBill, } from "react-icons/fa";
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
    const API_BASE = "http://localhost:3000/api";
    const [jenisList, setJenisList] = useState([]);
    const [kategoriList, setKategoriList] = useState([]);

    const [selectedJenis, setSelectedJenis] = useState("");
    const [selectedKategori, setSelectedKategori] = useState("");
    const [tarif, setTarif] = useState("");
    const [showNib, setShowNib] = useState(false);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        nik_wr: "",
        nama_wr: "",
        no_hp_wr: "",
        provinsi_wr: "",
        kabupaten_wr: "",
        kecamatan_wr: "",
        kelurahan_wr: "",
        alamat_wr: "",
        nib_wr: "",
        password_wr: "",

    });

    const [position, setPosition] = useState({
        lat: -6.597146, // Default: Bogor
        lng: 106.806039,
    });

    useEffect(() => {
        const fetchJenis = async () => {
            try {
                const res = await axios.get(`${API_BASE}/jenis-retribusi/getAlljenis`);
                setJenisList(res.data.data);
            } catch (err) {
                console.error("Gagal ambil jenis:", err);
            }
        };
        fetchJenis();
    }, []);

    useEffect(() => {
        if (!selectedJenis) {
            setKategoriList([]);
            setTarif("");
            return;
        }

        const fetchKategori = async () => {
            try {
                const res = await axios.get(`${API_BASE}/kategori-retribusi/getKategoriByJenis?id_jenis=${selectedJenis}`);
                setKategoriList(res.data.data);
            } catch (err) {
                console.error("Gagal ambil kategori", err);
            }
        };
        fetchKategori();

        const jenisObj = jenisList.find(j => j.id_jenis == selectedJenis);
        if (jenisObj && jenisObj.nama_jenis.toLowerCase() !== "rumah tangga") {
            setShowNib(true);
        } else {
            setShowNib(false);
        }
    }, [selectedJenis]);

    useEffect(() => {
        if (selectedJenis && selectedKategori) {
            axios
                .get(`${API_BASE}/wajib-retribusi/tarifWr?id_jenis=${selectedJenis}&id_kategori=${selectedKategori}`)
                .then((res) => {
                    const tarifValue = res.data.data?.total_tarif || 0;
                    setTarif(tarifValue);
                })
                .catch((err) => setTarif(""));
        }
    }, [selectedJenis, selectedKategori]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!selectedJenis) return "Silahkan pilih jenis retribusi";
        if (!selectedKategori) return "Silahkan pilih kategori retribusi";
        if (!form.nama_wr) return "Silahkan isi nama wajib retribusi";
        if (!form.nik_wr) return "Silahkan isi NIK";
        if (!form.provinsi_wr) return "Provinsi harus di isi";
        if (!form.kabupaten_wr) return "Kabupaten harus di isi";
        if (!form.kecamatan_wr) return "Kecamatan harus di isi";
        if (!form.kelurahan_wr) return "Kelurahan harus di isi";
        if (!form.alamat_wr) return "Alamat harus di isi";
        if (!form.no_hp_wr) return "Nomor whatsapp harus di isi";
        if (!/^08\d{8,13}$/.test(form.no_hp_wr))
            return "Nomor Hp harus diawali 08 dan panjang 10-15 digit";

        if (showNib && !form.nib_wr) return "Silahkan isi NIB";
        return null;
    }

    const handleNext = (e) => {
        e.preventDefault();
        const errorMsg = validateForm();
        if (errorMsg) {
            alert(errorMsg);
            return;
        }

        const payload = {
            id_jenis: selectedJenis,
            id_kategori: selectedKategori,
            ...form,
            lokasi_wr: `Lat: ${position.lat}, Lng: ${position.lng}`,
            total_tarif: tarif,
        };
        localStorage.setItem("pendingRegister", JSON.stringify(payload));

        window.location.href = "/password"
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const errorMsg = validateForm();
    //     if (errorMsg) {
    //         alert(errorMsg);
    //         return;
    //     }

    //     setLoading(true);
    //     try {
    //         const payload = {
    //             id_jenis: selectedJenis,
    //             id_kategori: selectedKategori,
    //             ...form,
    //             lokasi_wr: `Lat: ${position.lat}, Lng: ${posotion.lng}`,
    //         };

    //         const res = await axios.post(`${API_BASE}/wajib-retribusi/registerWr`, payload);
    //         alert(res.data.message || "Registrasi Berhasil!");
    //         setForm({
    //             nama_wr: "",
    //             nik_wr: "",
    //             nib_wr: "",
    //             provinsi_wr: "",
    //             kabupaten_wr: "",
    //             kecamatan_wr: "",
    //             kelurahan_wr: "",
    //             alamat_wr: "",
    //             no_hp_wr: "",
    //             password_wr: "",
    //         });
    //         setSelectedJenis("");
    //         setSelectedKategori("");
    //         setTarif("");
    //     } catch (error) {
    //         console.error("Error register:", error);
    //         alert("Gagal mendaftar. Coba lagi");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

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

                    <form onSubmit={handleNext} className="space-y-5">
                        {/* Jenis Wajib Retribusi */}
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Jenis Wajib Retribusi</p>
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaHome className="text-green-700 mr-3" />
                                <select
                                    value={selectedJenis}
                                    onChange={(e) => setSelectedJenis(e.target.value)}
                                    className="flex-1 outline-none bg-transparent text-gray-700"
                                >
                                    <option value="">Pilih Jenis Wajib Retribusi</option>
                                    {jenisList.map((j) => (
                                        <option key={j.id_jenis} value={j.id_jenis}>
                                            {j.nama_jenis}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Kategori */}
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Kategori</p>
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaHome className="text-green-700 mr-3" />
                                <select
                                    value={selectedKategori}
                                    onChange={(e) => setSelectedKategori(e.target.value)}
                                    className="flex-1 outline-none bg-transparent text-gray-700"
                                >
                                    <option value="">Pilih Kategori</option>
                                    {kategoriList.map((k) => (
                                        <option key={k.id_kategori} value={k.id_kategori}>
                                            {k.nama_kategori}
                                        </option>
                                    ))}
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
                                    name="nik_wr"
                                    placeholder="NIK"
                                    onChange={handleChange}
                                    className="flex-1 outline-none text-gray-700"
                                />
                            </div>

                            {/* NIB */}
                            {showNib && (
                                <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                    <FaIdCard className="text-green-700 mr-3" />
                                    <input
                                        type="text"
                                        name="nib_wr"
                                        placeholder="NIB (Nomor Izin Berusaha)"
                                        value={form.nib_wr}
                                        onChange={handleChange}
                                        className="flex-1 outline-none text-gray-700"
                                    />
                                </div>
                            )}

                            {/* Nama */}
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaUser className="text-green-700 mr-3" />
                                <input
                                    type="text"
                                    name="nama_wr"
                                    placeholder="Nama Lengkap"
                                    onChange={handleChange}
                                    className="flex-1 outline-none text-gray-700"
                                />
                            </div>

                            {/* WhatsApp */}
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaPhone className="text-green-700 mr-3" />
                                <input
                                    type="text"
                                    name="no_hp_wr"
                                    placeholder="Nomor WhatsApp"
                                    onChange={handleChange}
                                    className="flex-1 outline-none text-gray-700"
                                />
                            </div>

                            {/* Provinsi */}
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaMapMarkerAlt className="text-green-700 mr-3" />
                                <input
                                    type="text"
                                    name="provinsi_wr"
                                    placeholder="Provinsi"
                                    onChange={handleChange}
                                    className="flex-1 outline-none text-gray-700"
                                />
                            </div>

                            {/* Kabupaten */}
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaMapMarkerAlt className="text-green-700 mr-3" />
                                <input
                                    type="text"
                                    name="kabupaten_wr"
                                    placeholder="Kabupaten"
                                    onChange={handleChange}
                                    className="flex-1 outline-none text-gray-700"
                                />
                            </div>

                            {/* Kecamatan */}
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaMapMarkerAlt className="text-green-700 mr-3" />
                                <input
                                    type="text"
                                    name="kecamatan_wr"
                                    placeholder="Kecamatan"
                                    onChange={handleChange}
                                    className="flex-1 outline-none text-gray-700"
                                />
                            </div>

                            {/* Kelurahan */}
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                                <FaMapMarkerAlt className="text-green-700 mr-3" />
                                <input
                                    type="text"
                                    name="kelurahan_wr"
                                    placeholder="Kelurahan"
                                    onChange={handleChange}
                                    className="flex-1 outline-none text-gray-700"
                                />
                            </div>

                            {/* Alamat */}
                            <div className="border border-green-700 rounded-lg flex items-start px-4 py-3">
                                <FaMapMarkerAlt className="text-green-700 mr-3 mt-1" />
                                <textarea
                                    placeholder="Alamat Lengkap"
                                    name="alamat_wr"
                                    onChange={handleChange}
                                    rows="2"
                                    className="flex-1 outline-none text-gray-700 resize-none"
                                ></textarea>
                            </div>
                        </div>

                        {/* Layanan */}
                        <p className="text-sm text-gray-600 border-t pt-3">Total Tarif Bulanan</p>
                        <div className="space-y-4">
                            {/* <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
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
                            </div> */}

                            {/* TARIF */}
                            <div className="border border-green-700 rounded-lg flex items-center px-4 py-3 bg-gray-100">
                                <FaMoneyBill className="text-green-700 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Tarif (otomatis)"
                                    value={tarif ? `Rp ${Number(tarif).toLocaleString("id-ID")}`
                                        : "Tarif Belum Tersedia"
                                    }
                                    readOnly
                                    className="flex-1 outline-none bg-transparent text-gray-700"
                                />
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

                        {/* Tombol Lanjutkan */}
                        <button
                            onClick={handleNext}
                            disabled={loading}
                            className="w-full bg-[#0C513F] text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition mt-6 disabled:opacity-70"
                        >
                            {loading ? "Menyimpan..." : "Lanjutkan"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
