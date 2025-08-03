import { motion } from "framer-motion";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto text-center mb-10"
    >
      <h2 className="text-4xl font-bold text-accent mb-4">{heading}</h2>
      <p className="text-secondary-text">{subHeading}</p>
    </motion.div>
  );
};

export default SectionHeading;
