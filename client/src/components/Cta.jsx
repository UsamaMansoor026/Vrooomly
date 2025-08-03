import ctaCar from "../assets/banner_car_image.png";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="bg-gradient-to-tr from-primary-bg via-accent/50 to-secondary-bg global-padding py-16 flex flex-col md:flex-row justify-between gap-16 items-center mt-10">
      {/* Left */}
      <div>
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-3 text-3xl font-semibold"
        >
          Do You Own a Luxury Car?
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Monetize your vehicle effortlessly by listing it on CarRental.
        </motion.p>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mb-3"
        >
          We take care of insurance, driver verification and secure payments —
          so you can earn passive income, stress-free.
        </motion.p>

        <motion.button
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          type="button"
          className="bg-primary-text text-secondary-bg px-5 py-2 rounded-md duration-200 cursor-pointer hover:bg-secondary-bg hover:text-primary-text"
        >
          List your Car
        </motion.button>
      </div>

      {/* Right */}
      <div className="max-h-4/5">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          src={ctaCar}
          alt=""
        />
      </div>
    </section>
  );
};

export default Cta;
