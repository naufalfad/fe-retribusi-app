import registerIllustration from '../assets/register-illustration.png';

const WaitingVerify = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/login"
    }
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
            <div className="md:ml-[45%] md:w-[55%] bg-white flex flex-col p-6 md:p-10 overflow-y-auto h-screen" style={{ scrollBehavior: "smooth" }}>
                <div className="max-w-xl mx-auto mt-10 mb-16 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0C513F]">
                        Akun anda sedang dalam proses verifikasi petugas!
                    </h1>

                    <button
                        onClick={handleLogout}
                        className="w-full bg-[#0C513F] text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition mt-6 disabled:opacity-70"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WaitingVerify;