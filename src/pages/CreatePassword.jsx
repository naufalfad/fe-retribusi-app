import React, { useState } from "react";
import axios from "axios";
import { FaLock } from "react-icons/fa";
import registerIllustration from "../assets/register-illustration.png";

const CreatePassword = () => {
    const API_BASE = "http://localhost:3000/api";
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!password || !confirmPassword) {
            alert("Silakan isi semua kolom password!");
            return;
        }
        if (password.length < 8) {
            alert("Password minimal 8 karakter");
            return;
        }
        if (password !== confirmPassword) {
            alert("Konfirmasi password tidak cocok!");
            return;
        }

        const data = JSON.parse(localStorage.getItem("pendingRegister"));
        if (!data) {
            alert("Data registrasi tidak ditemukan, silakan isi ulang.");
            window.location.href = "/register";
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post(`${API_BASE}/wajib-retribusi/registerWr`, {
                ...data,
                password_wr: password,
            });
            alert(res.data.message || "Registrasi berhasil!");
            localStorage.setItem("no_hp_wr", data.no_hp_wr);
            localStorage.removeItem("pendingRegister");
            window.location.href = "/otp";
        } catch (err) {
            console.error("Gagal registrasi:", err);
            alert("Terjadi kesalahan saat membuat akun.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen font-poppins">
            {/* Kiri */}
            <div className="hidden md:flex md:w-[45%] bg-[#0C513F] fixed h-screen left-0 top-0 items-center justify-center">
                <img
                    src={registerIllustration}
                    alt="Ilustrasi"
                    className="w-[80%] max-w-[420px] object-contain"
                />
            </div>

            {/* Kanan */}
            <div className="md:ml-[45%] md:w-[55%] bg-white flex flex-col p-6 md:p-10 overflow-y-auto h-screen">
                <div className="max-w-xl mx-auto mt-24 mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0C513F] mb-2">
                        Buat Password
                    </h1>
                    <p className="text-gray-600 mb-8 text-sm">
                        Gunakan kata sandi minimal 8 karakter dengan kombinasi huruf besar, huruf kecil,
                        angka, dan simbol agar lebih aman.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                            <FaLock className="text-green-700 mr-3" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="flex-1 outline-none text-gray-700"
                            />
                        </div>

                        <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                            <FaLock className="text-green-700 mr-3" />
                            <input
                                type="password"
                                placeholder="Konfirmasi Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="flex-1 outline-none text-gray-700"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-[#0C513F] text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition ${loading ? "opacity-60 cursor-not-allowed" : ""
                                }`}
                        >
                            {loading ? "Memproses..." : "Lanjutkan"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePassword;
