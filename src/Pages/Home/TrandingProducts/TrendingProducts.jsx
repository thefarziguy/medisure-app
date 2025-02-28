import React from "react";
import { useState, useEffect } from "react";
import ProductItem from "../../../Components/CategoriesAndProducts/ProductItems/ProductItems";

// JSON response from api
const data = {
  products: [
    {
      image: "https://dummyimage.com/420x260",
      alt: "Smartphone",
      product_name: "iPhone 15 Pro",
      category_name: "Smartphone",
      price: 129999,
    },
    {
      image: "https://dummyimage.com/421x261",
      alt: "Smartphone",
      product_name: "Samsung Galaxy S23 Ultra",
      category_name: "Smartphone",
      price: 124999,
    },
    {
      image: "https://dummyimage.com/422x262",
      alt: "Smartphone",
      product_name: "OnePlus 11",
      category_name: "Smartphone",
      price: 56999,
    },
    {
      image: "https://dummyimage.com/423x263",
      alt: "Headphones",
      product_name: "Sony WH-1000XM5",
      category_name: "Headphones",
      price: 29999,
    },
    {
      image: "https://dummyimage.com/424x264",
      alt: "Laptop",
      product_name: "MacBook Air M2",
      category_name: "Laptop",
      price: 114999,
    },
    {
      image: "https://dummyimage.com/425x265",
      alt: "Laptop",
      product_name: "Dell XPS 13",
      category_name: "Laptop",
      price: 129999,
    },
    {
      image: "https://dummyimage.com/427x267",
      alt: "Laptop",
      product_name: "HP Spectre x360",
      category_name: "Laptop",
      price: 145999,
    },
    {
      image: "https://dummyimage.com/428x268",
      alt: "Smartwatch",
      product_name: "Apple Watch Series 9",
      category_name: "Smartwatch",
      price: 42999,
    },
  ],
};

export default function TrendingProducts() {
  const [products, setProducts] = useState(data.products);

  // we'll use this when we'll fetch data from api.
  // useEffect(() => {
  //   setProducts(data.products);
  // }, []);

  return (
    <div className="mx-8 max-sm:mx-2">
      <p className="text-lg max-md:text-base font-serif w-full mb-2 font-semibold">
        Trending Products
      </p>
      <section className="text-gray-400 bg-[#0a3939] body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <ProductItem key={product.product_name} data={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
