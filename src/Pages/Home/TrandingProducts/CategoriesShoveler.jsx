import React from "react";
import CategoryCard from "../../../Components/CategoriesAndProducts/Categories/CategoryCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css"; // Import Swiper styles

const categories = [
  { id: 1, name: "PhysioTherapy" },
  { id: 2, name: "ENT" },
  { id: 3, name: "Dental" },
  { id: 4, name: "Ophthalmology" },
  { id: 5, name: "Neurology" },
  { id: 6, name: "Cardiology" },
  { id: 7, name: "Psychiatry" },
  { id: 8, name: "Urology" },
  { id: 9, name: "Gastroenterology" },
  { id: 10, name: "Orthopaedics" },
  { id: 11, name: "Gynecology" },
  { id: 12, name: "Dermatology" },
  { id: 13, name: "Anesthesiology" },
  { id: 14, name: "Pediatrics" },
  { id: 15, name: "General Medicine" },
  { id: 16, name: "Otolaryngology" },
  { id: 17, name: "Radiology" },
  { id: 18, name: "Nephrology" },
  { id: 19, name: "Ophthalmology" },
];

export default function CategoriesShoveler() {
  return (
    <div className="px-8 max-md:px-2">
      <p className="text-lg max-md:text-base font-serif w-full my-2 font-semibold">
        Categories
      </p>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        loop={true} // Infinite loop
        speed={3500}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay settings
        modules={[Autoplay]} // Include modules
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        {/* Here we'll use some filter and mapping methods to filter only tranding
        products as per the category. */}
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoryCard name={category.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
