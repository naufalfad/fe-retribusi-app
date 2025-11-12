import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import loginIllustration from '../assets/login-illustration.png';

const LoginWajibRetribusi = () => {
    const [nikOrNib, setNikorNib] = useState("");
    const [password_wr, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const API_BASE = "http://localhost:3000/api";

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!nikOrNib || !password_wr) {
            alert("Silahkan isi NIK/NIB dan Password!");
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post(`${API_BASE}/auth/loginWr`, {
                nikOrNib,
                password_wr
            });

            const { token, data } = res.data;

            localStorage.setItem("authToken", token);
            localStorage.setItem("userData", JSON.stringify(data));

            alert("Login Berhasil!");
            window.location.href = "/";
        } catch (err) {
            console.error("Login error:", err);
            if (err.response && err.response.data.message) {
                alert(err.response.data.message);
            } else {
                alert("Login gagal. Periksa kembali data anda");
            }
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen font-poppins">
            {/* Kiri */}
            <div className="md:w-[60%] bg-[#0C513F] flex items-center justify-center relative p-8">
                <img
                    src={loginIllustration}
                    alt="Ilustrasi Login"
                    className="w-[300px] md:w-[350px] lg:w-[550px]"
                />
            </div>

            {/* Kanan */}
            <div className="md:w-[40%] flex flex-col justify-center p-10 bg-white">
                <h1 className="text-3xl md:text-4xl font-bold text-[#0C513F] mb-2">
                    Login Wajib Retribusi
                </h1>
                <h2 className="text-xl text-[#387B56] font-semibold mb-1">
                    Selamat Datang
                </h2>
                <p className="text-[#387B56] mb-8">di Aplikasi Retribusi Sampah</p>

                <form className="space-y-4" onSubmit={handleLogin}>
                    {/* NIK / NIB */}
                    <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                        <FaUser className="text-green-700 mr-3" />
                        <input
                            type="text"
                            placeholder="NIK/NIB"
                            value={nikOrNib}
                            onChange={(e) => setNikorNib(e.target.value)}
                            className="flex-1 outline-none text-gray-700"
                        />
                    </div>

                    {/* Password */}
                    <div className="border border-green-700 rounded-lg flex items-center px-4 py-3">
                        <FaLock className="text-green-700 mr-3" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password_wr}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex-1 outline-none text-gray-700"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-green-700"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Ingat Saya + Lupa Password */}
                    <div className="flex justify-between text-sm text-gray-600">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-green-700" />
                            Ingat Saya
                        </label>
                        <a href="#" className="text-green-800 hover:underline">
                            Lupa Password?
                        </a>
                    </div>

                    {/* Tombol Login */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#0C513F] text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition"
                    >
                        {loading ? "Memproses..." : "Login"}
                    </button>

                    {/* Link Daftar */}
                    <p className="text-center text-sm mt-3 text-gray-700">
                        Belum punya akun?{" "}
                        <a href="/register" className="text-green-900 font-semibold hover:underline">
                            Daftar disini
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginWajibRetribusi;
