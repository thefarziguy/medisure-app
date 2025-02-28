import React from "react";
import Slogan from "./SloganSection/Slogan";
import ProductContainer from "./TrandingProducts/ProductContainer";

export default function Home() {
  return (
    <div>
      <Slogan />
      <ProductContainer />

      {/* Expert Recommendations */}
      {/* <ExpertRecommendations /> */}

      {/* Top News / New Launches / Reviews */}
      {/* <TopNews /> */}

      {/* Discounted Products */}
      {/* <DiscountedProducts /> */}
    </div>
  );
}
