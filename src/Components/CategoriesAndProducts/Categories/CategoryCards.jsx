import React from "react";

export default function CategoryCard({ name }) {
  return (
    <div href="#testimonials">
      <div className="bg-white shadow-sm rounded-md place-items-center px-2 py-2  group hover:bg-[#1C3F3F]">
        <p className="text-lg max-sm:text-sm text-[#1C3F3F] text-nowrap group-hover:text-white">
          {name}
        </p>
      </div>
    </div>
  );
}
