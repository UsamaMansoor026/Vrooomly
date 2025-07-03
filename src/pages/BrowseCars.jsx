import { useEffect } from "react";
import { cars } from "../assets";
import { CarCard, CarSearchBox, SectionHeading } from "../components";

const BrowseCars = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="global-padding mt-16">
      <SectionHeading
        heading="Available Cars"
        subHeading="Browse our selection of premium vehicles available for your next adventure"
      />

      <CarSearchBox />

      {/* Cars Grid */}
      <div className="mt-16 space-y-4">
        <p className="text-secondary-text font-medium text-lg">
          Showing {cars.length} Cars
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {cars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseCars;
