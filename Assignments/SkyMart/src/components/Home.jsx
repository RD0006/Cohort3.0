import React from "react";

import Hero from "../components/home/Hero";
import HomeStats from "../components/home/HomeStats";
import Categories from "../components/home/Categories";
import ProductShowcase from "../components/home/ProductShowcase";
import Benefits from "../components/home/Benefits";

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#0d0d0d]">

      <div className="pt-[80px]">

        <Hero />

        <HomeStats />

        <Categories />

        <ProductShowcase />

        <Benefits />

      </div>

    </div>
  );
};

export default Home;