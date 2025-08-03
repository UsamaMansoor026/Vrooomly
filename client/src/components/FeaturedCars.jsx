import React from "react";
import { cars } from "../assets";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import CarCard from "./CarCard";

const FeaturedCars = () => {
  return (
    <section className="global-padding bg-primary-bg text-primary-text py-16 px-4">
      <SectionHeading
        heading="Featured Cars"
        subHeading="Explore our most popular cars, ready to hit the road!"
      />

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {cars.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/browse-cars"
          className="bg-accent text-primary-bg px-10 py-3 font-semibold text-lg cursor-pointer duration-200 hover:bg-accent-hover rounded-md shadow-lg shadow-shadow transition"
        >
          Explore All Cars
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCars;
