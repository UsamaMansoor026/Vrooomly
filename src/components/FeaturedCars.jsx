import React from "react";
import { cars } from "../assets";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

const FeaturedCars = () => {
  return (
    <section className="global-padding bg-primary-bg text-primary-text py-16 px-4">
      <SectionHeading
        heading="Featured Cars"
        subHeading="Explore our most popular cars, ready to hit the road!"
      />

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {cars.map((car) => (
          <Link
            to={`/car-detail/${car.id}`}
            state={{ car }}
            key={car.id}
            className="bg-secondary-bg rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-400 hover:-translate-y-2 cursor-pointer"
          >
            {/* Car Image */}
            <div className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover"
              />
              <p className="absolute right-3 bottom-4 bg-primary-bg rounded-full px-5 py-2 font-semibold text-xl">
                ${car.dailyRent}/Day
              </p>

              {/* Availability */}
              <p
                className={`absolute left-2 top-3 px-4 py-1 text-sm rounded-full ${
                  car.available === "Available" ? "bg-blue-500" : "bg-red-500"
                }`}
              >
                {car.available}
              </p>
            </div>

            {/* Car Info */}
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold text-accent">{car.name}</h3>
              <p className="text-sm text-secondary-text">
                {car.type} • {car.year}
              </p>

              {/* Details */}
              <div className="text-sm text-primary-text grid grid-cols-2 gap-y-1 mt-3">
                <div className="flex items-center gap-2">
                  <i className="fas fa-user-group text-accent" />
                  <span>{car.seats} Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-gas-pump text-accent" />
                  <span>{car.fuel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-gear text-accent" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-location-dot text-accent" />
                  <span>{car.location}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          type="button"
          className="bg-accent text-primary-bg px-10 py-3 font-semibold text-lg cursor-pointer duration-200 hover:bg-accent-hover rounded-md shadow-lg shadow-shadow transition"
        >
          Explore All Cars
        </button>
      </div>
    </section>
  );
};

export default FeaturedCars;
