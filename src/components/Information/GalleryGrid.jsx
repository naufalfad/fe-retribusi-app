import React from "react";

function GalleryGrid({ title, items }) {
  return (
    <div className="mt-14">
      {/* Judul Section */}
      <h3 className="text-[28px] md:text-[32px] font-extrabold text-brand dark:text-brand-dark mb-8">
        {title}
      </h3>

      {/* Grid Galeri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-sm bg-fillKolom dark:bg-fillKolom-dark ring-1 ring-outline/30 dark:ring-outline-dark/50 hover:scale-[1.02] transition-transform"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[160px] object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-[16px] text-brand dark:text-brand-dark mb-1">
                {item.title}
              </h4>
              <p className="text-[14px] text-ink/80 dark:text-ink-dark/80 leading-snug">
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
