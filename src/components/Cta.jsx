import ctaCar from "../assets/banner_car_image.png";

const Cta = () => {
  return (
    <section className="bg-gradient-to-tr from-primary-bg via-accent/50 to-secondary-bg global-padding py-16 flex flex-col md:flex-row justify-between gap-16 items-center mt-10">
      {/* Left */}
      <div>
        <h2 className="mb-3 text-3xl font-semibold">
          Do You Own a Luxury Car?
        </h2>
        <p>Monetize your vehicle effortlessly by listing it on CarRental.</p>
        <p className="mb-3">
          We take care of insurance, driver verification and secure payments —
          so you can earn passive income, stress-free.
        </p>

        <button
          type="button"
          className="bg-primary-text text-secondary-bg px-5 py-2 rounded-md duration-200 cursor-pointer hover:bg-secondary-bg hover:text-primary-text"
        >
          List your Car
        </button>
      </div>

      {/* Right */}
      <div className="max-h-4/5">
        <img src={ctaCar} alt="" />
      </div>
    </section>
  );
};

export default Cta;
