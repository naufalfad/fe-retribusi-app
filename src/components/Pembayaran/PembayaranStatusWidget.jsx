import React from "react";
import {
  CheckCircle,
  XCircle,
  Clock,
  DollarSign,
  User,
  Calendar,
} from "lucide-react";

const statusConfig = {
  SUKSES: {
    icon: <CheckCircle className="h-10 w-10 text-white" />,
    color: "bg-[#1C7C54]",
    title: "Pembayaran Berhasil DIVERIFIKASI",
  },
  PENDING: {
    icon: <Clock className="h-10 w-10 text-white" />,
    color: "bg-yellow-500",
    title: "Pembayaran SEDANG DIPROSES",
  },
  GAGAL: {
    icon: <XCircle className="h-10 w-10 text-white" />,
    color: "bg-red-600",
    title: "Pembayaran GAGAL",
  },
};

function formatCurrency(v = 0) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(v);
}

function formatDate(dateString) {
  if (!dateString) return "N/A";
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString("id-ID", options);
}

export default function PembayaranStatusWidget({ data }) {
  const config = statusConfig[data.status] || statusConfig["PENDING"];

  const detailItem = (Icon, label, value) => (
    <div className="flex items-start mb-3">
      <Icon className="h-5 w-5 text-black/60 mr-3 mt-1 flex-shrink-0" />
      <div>
        <div className="text-sm text-black/60">{label}</div>
        <div className="text-base font-semibold text-black">{value}</div>
      </div>
    </div>
  );

  return (
    <div className="rounded-xl shadow-lg border border-black/10 overflow-hidden">
      {/* Header Status */}
      <div
        className={`flex items-center p-4 md:p-6 text-white ${config.color}`}
      >
        <div className="p-2 rounded-full bg-white/30 mr-4">{config.icon}</div>
        <h2 className="text-xl md:text-2xl font-bold">{config.title}</h2>
      </div>

      {/* Konten Detail */}
      <div className="p-4 md:p-6 bg-white">
        <p className="text-lg font-semibold text-black mb-4">
          Rincian Pembayaran
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-200 pb-4 mb-4">
          {detailItem(User, "Wajib Retribusi", data.wajibRetribusi)}
          {detailItem(
            DollarSign,
            "Jumlah Dibayarkan",
            formatCurrency(data.amount)
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {detailItem(Calendar, "ID Transaksi", data.id)}
          {data.paidAt &&
            detailItem(Calendar, "Tanggal Pembayaran", formatDate(data.paidAt))}
          {!data.paidAt &&
            detailItem(
              Clock,
              "Terakhir Diperbarui",
              formatDate(new Date().toISOString())
            )}
        </div>

        <div className="mt-4 p-3 bg-gray-50 rounded-lg text-black/80 border border-gray-200">
          <p className="font-semibold mb-1">Keterangan:</p>
          <p className="text-sm">{data.keterangan}</p>
        </div>
      </div>
    </div>
  );
}
