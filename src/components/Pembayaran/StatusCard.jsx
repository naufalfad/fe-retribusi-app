import { CheckCircle } from "lucide-react";

export default function StatusCard({
  title, // Tetap di sini, tapi akan dipindahkan ke luar di parent
  imageSrc, // Prop baru untuk sumber gambar
  isActive, // Diabaikan karena statis
  className = "",
}) {
  // Menghitung dimensi 239x146px ke Tailwind ratio (asumsi w/h ~ 1.63)
  // w-60 (240px) dan h-36 (144px) mendekati rasio yang diminta.

  return (
    <div
      className={`p-0 rounded-xl transition duration-300 border shadow-md w-60 h-36 mx-auto overflow-hidden ${className}`}
    >
      {/* Area Ikon/Gambar */}
      <div className="w-full h-full flex justify-center items-center">
        {/* Asumsi: imageSrc adalah path gambar untuk setiap langkah */}
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          // Placeholder jika gambar tidak ada (misalnya untuk langkah 'Selesai' yang hanya centang besar)
          <CheckCircle className="w-1/2 h-1/2 text-[#1C7C54]" />
        )}
      </div>
    </div>
  );
}
