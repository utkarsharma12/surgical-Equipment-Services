import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "top-2 px-4" : "top-0 px-0"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 rounded-3xl"
            : "bg-white/90 backdrop-blur-md border-b border-gray-100"
        } px-6`}
      >
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-900 flex items-center gap-1 group">
            <motion.span whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }} className="text-indigo-600">
              ✦
            </motion.span>
            <span>
              Surgical<span className="text-indigo-600">Equip</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="relative text-slate-700 font-medium hover:text-indigo-600 transition duration-300 group py-2"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+911234567890" className="text-slate-600 font-medium hover:text-indigo-600 transition">
              +91 XXXXX XXXXX
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 hover:bg-indigo-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-indigo-500/30"
            >
              Request Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-slate-900 p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.div animate={{ rotate: menuOpen ? 90 : 0 }}>
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 mx-4 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block text-slate-700 font-medium text-lg hover:text-indigo-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full bg-indigo-600 text-white py-3 rounded-2xl mt-4 font-medium shadow-md"
              >
                Request Quote
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

