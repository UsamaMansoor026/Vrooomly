import React from "react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../assets";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="global-padding mt-32">
      <SectionHeading
        heading="What Our Customers Say"
        subHeading="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} key={testimonial.id} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
