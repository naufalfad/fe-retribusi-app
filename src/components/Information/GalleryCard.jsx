import React from "react";

function GalleryCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-5 items-start">
      <div className="overflow-hidden rounded-xl ring-1 ring-outline/40 dark:ring-outline-dark/60">
        <img
          src={image}
          alt={title}
          className="block w-full h-[160px] md:h-[180px] object-cover"
        />
      </div>
      <div>
        <h4 className="text-[20px] font-semibold text-ink dark:text-ink-dark mb-2">
          {title}
        </h4>
        <p className="text-[14px] leading-relaxed text-ink/80 dark:text-ink-dark/80">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default GalleryCard;
