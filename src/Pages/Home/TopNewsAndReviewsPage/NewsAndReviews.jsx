import { useState } from "react";
import NewsAndReviewCards from "../../../Components/TopNewsAndReviews/NewsAndReviewCards";

const newsData = [
  {
    category: "Smartwatch",
    date: "18 June 2025",
    productHeading: "Lauched New Product Today",
    text: "This is the bestest smartwatch for youth must buy",
    url: "https://www.youtube.com",
  },
  {
    category: "Laptop",
    date: "19 June 2025",
    productHeading: "Lauched New Product Today",
    text: "This is the bestest Laptop for youth must buy",
    url: "https://www.youtube.com",
  },
  {
    category: "Smartphone",
    date: "20 June 2025",
    productHeading: "Lauched New Product Today",
    text: "This is the bestest Smartphone for youth must buy",
    url: "https://www.youtube.com",
  },
];
export default function NewsAndReviews() {
  const [data, setData] = useState(newsData);
  return (
    <div>
      <div>
        <p>Top News/New Launches/Reviews</p>
      </div>
      <section className="text-black body-font overflow-hidden">
        <div className="container px-5 py mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-800">
            {data.map((newsData) => (
              <NewsAndReviewCards
                key={newsData.category}
                data={newsData}
                lable={"Learn More"}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
