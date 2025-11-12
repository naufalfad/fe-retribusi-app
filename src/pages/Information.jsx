import React from "react";
import InfoIntro from "../components/Information/InfoIntro";
import GalleryGrid from "../components/Information/GalleryGrid";
import InfoIllustration from "../assets/information-illustration.svg";
import KerjaBakti from "../assets/kerja-bakti.jpg";
import SensorPolusiUdara from "../assets/sensor.png";
import HukumLimbah from "../assets/limbah.jpg";
import Incenerator from "../assets/incenerator.jpg";

function Information() {
  const illustrationSrc = InfoIllustration;

  const stats = [
    {
      value: "12.540",
      label: "Wajib Retribusi",
      sublabel: "Rumah Tangga Terdaftar",
    },
    {
      value: "10.679",
      label: "Wajib Retribusi",
      sublabel: "Badan Usaha Terdaftar",
    },
    {
      value: "Rp. 10.568.980",
      label: "Pendapatan Daerah dari",
      sublabel: "Pembayaran Retribusi Sampah",
    },
  ];

  const gallery = [
    {
      image: KerjaBakti,
      title: "Sosialisasi Bogor Bersih",
      desc: "Bogor bersih adalah suatu program inisiasi Kabupaten Bogor untuk merubah paradigma kebersihan.",
    },
    {
      image: SensorPolusiUdara,
      title: "Sensor Polusi Udara",
      desc: "Implementasi sensor polusi udara di beberapa titik strategis.",
    },
    {
      image: Incenerator,
      title: "Uji Coba Incenerator",
      desc: "DLH Bogor menerapkan program incenerator tanpa polusi udara sebagai komitmen program pemusnahan sampah dengan teknologi hijau.",
    },
    {
      image: HukumLimbah,
      title: "Penegakan Hukum Limbah",
      desc: "Langkah DLH dalam melaksanakan penegakan hukum pengelolaan limbah.",
    },
  ];

  return (
    <section
      id="informasi"
      className="bg-background text-green dark:bg-background-dark dark:text-green-dark transition-colors"
    >
      {/* Hilangkan max-w mx-auto supaya padding horizontal konsisten */}
      <div className="w-full px-[70px] pt-0 pb-14 lg:pb-20">
        <InfoIntro illustrationSrc={illustrationSrc} stats={stats} />
        <GalleryGrid
          title="Galeri dan Berita Kegiatan Terbaru"
          items={gallery}
        />
      </div>
    </section>
  );
}

export default Information;