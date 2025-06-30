import React from "react";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="max-w-7xl mx-auto text-center mb-10">
      <h2 className="text-4xl font-bold text-accent mb-4">{heading}</h2>
      <p className="text-secondary-text">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
