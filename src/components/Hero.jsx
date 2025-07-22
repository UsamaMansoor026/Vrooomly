import React, { useState } from "react";
import DatePicker from "react-datepicker";
import HeroCar from "../assets/main_car.png";
import { motion } from "framer-motion";

const Hero = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [location, setLocation] = useState("");

  return (
    <section className="global-padding bg-primary-bg text-primary-text py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-accent"
        >
          Drive Your Dream Car Today
        </motion.h1>
        <motion.p
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-secondary-text mb-10"
        >
          Vrooomly makes car rentals seamless. Choose your ride, pick a date,
          and hit the road.
        </motion.p>

        {/* Form */}
        {/* <motion.form
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="bg-secondary-bg p-4 rounded-lg shadow-md flex flex-col md:flex-row items-stretch md:items-end justify-between gap-4 mb-10"
        >
          <div className="w-full flex flex-col items-start space-y-1">
            <label
              htmlFor="location"
              className="text-sm text-input-placeholder"
            >
              Pick-up Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-input-bg text-input-text border border-input-border rounded px-4 py-2 outline-none placeholder:text-input-placeholder"
            >
              <option value="">Pick-up Location</option>
              <option value="karachi">Karachi</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
            </select>
          </div>

          <div className="w-full flex flex-col items-start space-y-1">
            <label
              htmlFor="pickupdate"
              className="text-sm text-input-placeholder"
            >
              Pick-up Date
            </label>
            <DatePicker
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
              placeholderText="Pickup Date"
              className="w-full md:w-auto flex-1 bg-input-bg text-input-text border border-input-border rounded px-4 py-2 outline-none"
            />
          </div>

          <div className="w-full flex flex-col items-start space-y-1">
            <label
              htmlFor="returndate"
              className="text-sm text-input-placeholder"
            >
              Return Date
            </label>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              placeholderText="Return Date"
              className="w-full md:w-auto flex-1 bg-input-bg text-input-text border border-input-border rounded px-4 py-2 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-hover text-primary-bg font-bold py-2 px-6 rounded-md transition"
          >
            Search Car
          </button>
        </motion.form> */}

        {/* Car Image */}
        <div className="text-center">
          <motion.img
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.4 }}
            src={HeroCar}
            alt="Car rental"
            className="w-full  mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
