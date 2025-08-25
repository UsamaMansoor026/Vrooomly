import { useState } from "react";
import { Link } from "react-router-dom";
import { Login, Signup } from "../pages";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState("");

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="global-padding bg-secondary-bg z-20 text-secondary-text shadow-md shadow-shadow"
      >
        <div className="max-w-7xl mx-auto py-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-accent uppercase"
          >
            Vrooomly
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-accent transition">
              Home
            </Link>
            <Link to="/browse-cars" className="hover:text-accent transition">
              Cars
            </Link>
            <Link to="/my-bookings" className="hover:text-accent transition">
              My Bookings
            </Link>
            <button
              type="button"
              className="bg-accent hover:bg-accent text-primary-bg px-10 py-2 rounded-md font-medium transition cursor-pointer"
              onClick={() => setShowAuthPopup("login")}
            >
              Login
            </button>
          </nav>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-accent text-2xl focus:outline-none"
          >
            {menuOpen ? <>✕</> : <>☰</>}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-primary-text bg-secondary-bg">
            <Link
              to="/"
              className="block hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/browse-cars"
              className="block hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Cars
            </Link>
            <Link
              to="/my-bookings"
              className="block hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              My Bookings
            </Link>
            <button
              type="button"
              className="block bg-accent hover:bg-accent-hover text-primary-bg px-4 py-2 rounded-md text-center font-medium cursor-pointer"
              onClick={() => {
                setMenuOpen(false);
                setShowAuthPopup("login");
              }}
            >
              Login
            </button>
          </div>
        )}
      </motion.header>

      {/* Login Form */}
      {showAuthPopup === "login" && (
        <Login setShowAuthPopup={setShowAuthPopup} />
      )}
      {showAuthPopup === "signup" && (
        <Signup setShowAuthPopup={setShowAuthPopup} />
      )}
    </>
  );
};

export default Header;
