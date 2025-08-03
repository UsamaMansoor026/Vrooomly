import React from "react";
import SectionHeading from "./SectionHeading";

const NeverMisDeal = () => {
  return (
    <section className="global-padding mt-32">
      <SectionHeading
        heading="Never Miss a Deal!"
        subHeading="Subscribe to get the latest offers, new arrivals, and exclusive discounts"
      />

      <form className="flex items-center justify-between max-w-2xl w-full mx-auto md:h-13 h-12">
        <input
          type="text"
          className="border border-border rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          placeholder="Enter your email address"
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-primary-bg font-semibold bg-accent hover:bg-accent-hover transition-all cursor-pointer rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NeverMisDeal;
