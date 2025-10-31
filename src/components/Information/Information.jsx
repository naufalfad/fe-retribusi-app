import React from "react";
import InfoIntro from "./InfoIntro";
import GalleryGrid from "./GalleryGrid";
import InfoIllustration from "../../assets/information-illustration.svg";

function Information() {
  // ilustrasi kini dari assets lokal
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
      image:
        "https://images.unsplash.com/photo-1520975922284-9bfa9285a832?q=80&w=1200&auto=format&fit=crop",
      title: "Sosialisasi Bogor Bersih",
      desc: "Program inisiasi Kabupaten Bogor untuk merubah paradigma kebersihan.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
      title: "Sensor Polusi Udara",
      desc: "Implementasi sensor polusi udara di beberapa titik strategis.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop",
      title: "Uji Coba Incenerator",
      desc: "Penerapan incenerator rendah emisi sebagai solusi pemusnahan.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=1200&auto=format&fit=crop",
      title: "Penegakan Hukum Limbah",
      desc: "Langkah DLH dalam penegakan pengelolaan limbah.",
    },
  ];

  return (
    <section
      id="informasi"
      className="bg-background text-green dark:bg-background-dark dark:text-green-dark transition-colors"
    >
           {" "}
      {/* Menghapus max-w-[1200px] mx-auto agar px-[70px] selalu bekerja */}   
       {" "}
      <div className="px-[70px] w-full pt-0 md:pt-0 lg:pt-0 pb-14 md:pb-16 lg:pb-20">
                <InfoIntro illustrationSrc={illustrationSrc} stats={stats} />
                <div className="mt-12 md:mt-16 h-px" />
               {" "}
        <GalleryGrid
          title="Galeri dan Berita Kegiatan Terbaru"
          items={gallery}
        />
             {" "}
      </div>
         {" "}
    </section>
  );
}

export default Information;
