import React from "react";
import CategoriesShoveler from "./CategoriesShoveler";
import TrendingProducts from "./TrendingProducts";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductContainer() {
  return (
    <div className="mt-10 place-items-center mx-8 flex flex-col max-sm:mx-2 w-s ">
      <div className="bg-white flex sm:w-[480px] h-[48px] pl-2 pr-2 place-items-center shadow-sm z-50 rounded-md">
        <FontAwesomeIcon
          icon={faSearch}
          className="text-slate-600"
        ></FontAwesomeIcon>
        <input
          placeholder="Search for products,by field, or function"
          className="w-full px-2 outline-none"
        />
        <button className="text-white bg-[#1C3F3F] px-4 py-2 rounded-md">
          Search
        </button>
      </div>
      <div className="bg-clip-border overflow-hidden top-[-24px] pt-[32px] pb-2  w-full mx-auto bg-slate-100 shadow-sm">
        <CategoriesShoveler />
        <div className="pt-12">
          <TrendingProducts />
        </div>
      </div>
    </div>
  );
}
