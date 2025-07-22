import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CarCard = ({ car }) => {
  const [delay, setDelay] = useState(0.1);

  useEffect(() => {
    const windowCheck = () => {
      if (window.innerWidth < 768) {
        setDelay(0);
      } else if (window.innerWidth < 1024) {
        setDelay(0.05);
      } else {
        setDelay(0.1);
      }
    };

    window.addEventListener("resize", windowCheck);

    return window.removeEventListener("resize", windowCheck);
  }, []);

  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, delay: delay * car.id }}
    >
      <Link
        to={`/car-detail/${car.id}`}
        state={{ car }}
        key={car.id}
        className="bg-secondary-bg rounded-lg overflow-hidden shadow-shadow shadow-lg hover:shadow-xl transition duration-400 hover:-translate-y-2 cursor-pointer"
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
    </motion.div>
  );
};

export default CarCard;
