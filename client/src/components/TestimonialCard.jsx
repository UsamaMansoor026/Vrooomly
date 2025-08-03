import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { name, city, rating, text, avatar } = testimonial;

  // Generate an array of stars
  const stars = Array.from({ length: 5 }, (_, i) => (
    <i
      key={i}
      className={`fas fa-star ${
        i < rating ? "text-yellow-400" : "text-gray-500"
      }`}
    ></i>
  ));

  return (
    <div className="bg-secondary-bg text-primary-text p-6 rounded-lg shadow-md space-y-4">
      {/* Top Row: Image and Name/City */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-accent"
        />
        <div>
          <h4 className="text-xl font-semibold">{name}</h4>
          <p className="text-sm text-secondary-text">{city}</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex gap-1">{stars}</div>

      {/* Testimonial Text */}
      <p className="text-secondary-text text-sm leading-relaxed">{text}</p>
    </div>
  );
};

export default TestimonialCard;
