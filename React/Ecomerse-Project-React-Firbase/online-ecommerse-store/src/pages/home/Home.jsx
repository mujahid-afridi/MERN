import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/productCard";
import Testimonial from "../../components/testimonial/Testimonial";


function Home(){

  return (
    <>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Testimonial />
    </>
  )
}
export default Home;