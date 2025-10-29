import React from "react";

function StatCard({ value, label, sublabel }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl shadow-sm bg-fillKolom dark:bg-fillKolom-dark ring-1 ring-outline/30 dark:ring-outline-dark/40">
      <h3 className="text-[28px] font-extrabold text-brand dark:text-brand-dark">
        {value}
      </h3>
      <p className="mt-1 text-[14px] font-medium text-ink dark:text-ink-dark">
        {label}
      </p>
      <p className="text-[12px] text-ink/70 dark:text-ink-dark/70">
        {sublabel}
      </p>
    </div>
  );
}

export default StatCard;
