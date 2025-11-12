import React from "react";

function GalleryGrid({ title, items = [] }) {
  return (
    <div className="mt-10">
      {/* Judul */}
      <h3 className="text-[35px] font-bold text-green dark:text-green-dark mb-6">
        {title}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-[5px]">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            {/* Card Gambar */}
            <div
              className="bg-white dark:bg-fillKolom-dark rounded-[20px] shadow-sm overflow-hidden flex-shrink-0"
              style={{ width: "310px", height: "155px" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/310x155/1C7C54/FFFFFF?text=Galeri";
                }}
              />
            </div>

            {/* Teks di luar card */}
            <div className="h-[155px] pt-1 flex flex-col">
              <h4 className="text-[25px] font-semibold text-green dark:text-green-dark leading-tight mb-2">
                {item.title}
              </h4>
              <p className="text-[15px] text-black dark:text-black-dark leading-normal max-w-[330px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryGrid;
