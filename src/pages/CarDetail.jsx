import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BookingForm } from "../components";

const CarDetail = () => {
  const { state } = useLocation();
  const car = state?.car;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!car) {
    return (
      <div className="text-center text-primary-text py-20">
        <p className="mb-4">Car not found.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-accent px-4 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <section className="global-padding bg-primary-bg text-primary-text min-h-screen py-10 px-6 flex flex-col lg:flex-row justify-between gap-5">
      <div className="max-w-5xl mx-auto">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-6"
        />

        <h1 className="text-4xl font-bold text-accent mb-2">{car.name}</h1>
        <p className="text-secondary-text text-lg mb-4">
          {car.type} • {car.year}
        </p>

        <hr className="my-6 border-none h-0.5 bg-secondary-bg" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
          <div className="flex items-center gap-2">
            <i className="fas fa-user-group text-accent" /> {car.seats} Seats
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-gas-pump text-accent" /> {car.fuel}
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-gear text-accent" /> {car.transmission}
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-location-dot text-accent" /> {car.location}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-accent mb-2">
            Description
          </h2>
          <p className="text-secondary-text leading-relaxed">
            The {car.name} is a reliable {car.type} from {car.year}, known for
            its excellent performance and comfort. Whether you're planning a
            city ride or a long trip, this car offers top-notch efficiency and
            modern features for an enjoyable experience.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-accent mb-2">Features</h2>
          <ul className="list-disc pl-6 text-secondary-text space-y-1 grid grid-cols-2">
            <li>Air Conditioning</li>
            <li>Bluetooth Connectivity</li>
            <li>ABS with EBD</li>
            <li>Reverse Camera</li>
            <li>Remote Keyless Entry</li>
            <li>Touchscreen Display</li>
          </ul>
        </div>
      </div>

      <div className="lg:max-w-[400px] max-w-full w-full bg-secondary-bg p-6 rounded-lg shadow-lg h-fit relative lg:sticky top-5">
        <BookingForm dailyPrice={car.dailyRent} />
      </div>
    </section>
  );
};

export default CarDetail;
