import Console from "./Homecompent/Console";
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
} from "reactstrap";
import ProductsSection from "./Homecompent/Productcard";
import FeaturedProducts from "./Homecompent/FeaturedProducts";
import CustomerReviews from "./Homecompent/CustomerReviews";
import NewArrivals from "./Homecompent/NewArrivals";

const Home = () => {
  return (
    <div>
      <Console />
      <br></br>
      <br></br>

      <ProductsSection />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <FeaturedProducts />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CustomerReviews />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <NewArrivals />
    </div>
  );
};
export default Home;
