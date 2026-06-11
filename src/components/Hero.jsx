import heroImage from "../assets/hero.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-[#f8fafc] to-indigo-100/50 min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-indigo-300/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-semibold uppercase tracking-wider text-sm mb-6 border border-indigo-200 shadow-sm">
              Trusted Surgical Solutions
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mt-2 leading-tight tracking-tight">
              Precision Surgical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500"> Instruments </span>
              For Modern Healthcare
            </h1>

            <p className="text-slate-600 text-lg md:text-xl mt-6 leading-relaxed max-w-lg">
              We provide high-quality surgical equipment designed
              for hospitals, clinics, and healthcare professionals
              worldwide. Trusted by medical experts.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-500/30 font-medium text-lg">
                Explore Products
              </motion.button>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition duration-300 shadow-sm font-medium text-lg">
                Contact Us
              </motion.button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-slate-200/60">
              {[
                { value: "69K+", label: "Products" },
                { value: "236+", label: "Countries" },
                { value: "25+", label: "Years Exp." },
              ].map((stat, i) => (
                <div key={i}>
                  <h2 className="text-3xl font-bold text-slate-900">
                    {stat.value}
                  </h2>
                  <p className="text-slate-500 font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <img
              src={heroImage}
              alt="Surgical Equipment"
              className="w-full max-w-lg rounded-[2.5rem] shadow-2xl border-4 border-white/50 backdrop-blur-sm"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;