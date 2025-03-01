import React from "react";
// import { Link } from "react-router-dom";

export default function NewsAndReviewCards({ data, lable }) {
  return (
    <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-black">
          {data.category}
        </span>
        <span className="mt-1 text-black text-sm">{data.date}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-black title-font mb-2">
          {data.productHeading}
        </h2>
        <p className="leading-relaxed">{data.text}</p>
        <a
          href={data.url}
          className="text-indigo-800 inline-flex items-center mt-4"
        >
          {lable}
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path> */}
          </svg>
        </a>
      </div>
    </div>
  );
}
