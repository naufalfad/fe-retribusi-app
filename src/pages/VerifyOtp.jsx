import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import registerIllustration from "../assets/register-illustration.png";

const VerifyOtp = () => {
    const API_BASE = "http://localhost:3000/api";
    const [code, setOtp] = useState(["", "", "", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(60);
    const inputsRef = useRef([]);
    const [loading, setLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");

    // Ambil no_hp_wr dari localStorage
    useEffect(() => {
        const pending = JSON.parse(localStorage.getItem("pendingRegister"));
        const storedPhone = localStorage.getItem("no_hp_wr");

        if (pending && pending.no_hp_wr) {
            setPhoneNumber(pending.no_hp_wr);
        } else if (storedPhone) {
            setPhoneNumber(storedPhone);
        } else {
            alert("Nomor WhatsApp tidak ditemukan. Silakan daftar ulang.");
            window.location.href = "/register";
        }
    }, []);
    // useEffect(() => {
    //     const storedData = JSON.parse(localStorage.getItem("pendingRegister"));
    //     if (storedData && storedData.no_hp_wr) {
    //         setPhoneNumber(storedData.no_hp_wr);
    //     } else {
    //         alert("Data registrasi tidak ditemukan. Silakan daftar ulang.");
    //         window.location.href = "/register";
    //     }
    // }, []);

    // Timer countdown OTP
    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    // Handle input OTP
    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        if (!value) return;
        const newOtp = [...code];
        newOtp[index] = value;
        setOtp(newOtp);
        // Fokus ke input berikutnya
        if (index < 5 && value) inputsRef.current[index + 1].focus();
    };

    // Handle backspace
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    // Submit OTP ke backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpCode = code.join("");
        if (otpCode.length < 6) {
            alert("Kode OTP harus 6 digit!");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post(`${API_BASE}/auth/verifyOtp`, {
                no_hp_wr: phoneNumber,
                code: otpCode,
            });
            alert(res.data.message || "Verifikasi berhasil!");
            localStorage.removeItem("pendingRegister");
            window.location.href = "/login";
        } catch (err) {
            console.error("Verifikasi gagal:", err);
            alert("Kode OTP salah atau sudah kedaluwarsa.");
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
                    alt="Ilustrasi OTP"
                    className="w-[80%] max-w-[420px] object-contain"
                />
            </div>

            {/* Kanan */}
            <div className="md:ml-[45%] md:w-[55%] bg-white flex flex-col p-6 md:p-10 overflow-y-auto h-screen">
                <div className="max-w-xl mx-auto mt-24 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0C513F] mb-2">
                        Masukkan Kode OTP
                    </h1>
                    <p className="text-gray-600 text-sm mb-1">
                        Kode OTP telah dikirim ke WhatsApp anda.
                    </p>
                    <p className="text-gray-600 text-sm mb-6">
                        Mohon masukkan kode yang telah dikirimkan.
                    </p>

                    {/* Countdown Timer */}
                    <p className="text-[#0C513F] font-semibold mb-6">
                        {timeLeft > 0
                            ? `00:${timeLeft.toString().padStart(2, "0")}`
                            : "Kode kedaluwarsa"}
                    </p>

                    {/* Input OTP */}
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-center gap-3 mb-8">
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(el) => (inputsRef.current[index] = el)}
                                    className="w-12 h-12 border-2 border-green-700 rounded-lg text-center text-xl text-gray-800 focus:outline-none focus:border-green-900"
                                />
                            ))}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#0C513F] text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition disabled:opacity-70"
                        >
                            {loading ? "Memproses..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtp;