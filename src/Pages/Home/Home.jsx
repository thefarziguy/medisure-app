import React from "react";
import Slogan from "./SloganSection/Slogan";
import ProductContainer from "./TrandingProducts/ProductContainer";
import NewRecomanded from "./NewRecomandedProducts/NewLaunch";
import NewsAndReviews from "./TopNewsAndReviewsPage/NewsAndReviews";

export default function Home() {
  return (
    <div>
      <Slogan />
      <ProductContainer />
      <NewRecomanded />
      <NewsAndReviews />

      {/* Top News / New Launches / Reviews */}
      {/* <TopNews /> */}

      {/* Discounted Products */}
      {/* <DiscountedProducts /> */}
    </div>
  );
}
