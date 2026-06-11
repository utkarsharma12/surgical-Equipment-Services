import { motion } from "framer-motion";
import { Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Scalpel Set",
    category: "General Surgery",
    image: "https://picsum.photos/600/400?1",
    description:
      "Precision surgical scalpels for professional operating rooms.",
  },
  {
    id: 2,
    name: "Microsurgical Forceps",
    category: "Neurosurgery",
    image: "https://picsum.photos/600/400?2",
    description:
      "High-precision forceps for delicate procedures.",
  },
  {
    id: 3,
    name: "Retractors",
    category: "General Surgery",
    image: "https://picsum.photos/600/400?3",
    description:
      "Maintain visibility and access during surgery.",
  },
  {
    id: 4,
    name: "Surgical Scissors",
    category: "ENT",
    image: "https://picsum.photos/600/400?4",
    description:
      "Premium-grade cutting instruments for precision work.",
  },
  {
    id: 5,
    name: "Needle Holders",
    category: "Orthopedic",
    image: "https://picsum.photos/600/400?5",
    description:
      "Designed for secure needle handling and control.",
  },
  {
    id: 6,
    name: "Laparoscopic Instruments",
    category: "Laparoscopy",
    image: "https://picsum.photos/600/400?6",
    description:
      "Advanced minimally invasive surgical equipment.",
  },
];

function Products() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-cyan-500 text-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Surgical Instruments Catalog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg"
          >
            Explore our extensive collection of premium-quality surgical instruments trusted by healthcare professionals.
          </motion.p>

        </div>
      </section>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="flex justify-center mb-20">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none z-10">
              <Search size={22} className="text-gray-400 group-focus-within:text-indigo-600 group-hover:text-indigo-600 transition-colors duration-300" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="w-16 h-16 pl-14 pr-6 rounded-full border border-transparent bg-white shadow-lg outline-none text-transparent placeholder-transparent transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus:w-[36rem] focus:rounded-2xl focus:text-slate-800 focus:placeholder-gray-400 hover:w-[36rem] hover:rounded-2xl hover:text-slate-800 hover:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500/20 cursor-pointer focus:cursor-text"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">

          {[
            "All",
            "Neurosurgery",
            "ENT",
            "Orthopedic",
            "Laparoscopy",
            "General Surgery",
          ].map((category) => (
            <button
              key={category}
              className="px-8 py-4 rounded-full bg-white shadow-md hover:shadow-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 font-medium text-slate-700"
            >
              {category}
            </button>
          ))}

        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition flex flex-col h-full"
            >

              <div className="overflow-hidden h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-10 flex flex-col flex-grow">

                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold border border-indigo-100">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mt-2 text-slate-900">
                  {product.name}
                </h3>

                <p className="text-slate-600 mt-4 leading-relaxed text-lg mb-8">
                  {product.description}
                </p>

                <button className="mt-auto w-full py-4 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-500/30">
                  View Details
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Products;