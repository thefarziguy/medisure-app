import React from "react";

export default function ProductItem({ data }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt={data.alt}
          className="object-cover object-center w-full h-full block"
          src={data.image}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {data.category_name}
        </h3>
        <h2 className="text-white title-font text-lg font-medium max-md:text-sm">
          {data.product_name}
        </h2>
        <p className="mt-1 max-md:text-sm">{data.price}</p>
      </div>
    </div>
  );
}
