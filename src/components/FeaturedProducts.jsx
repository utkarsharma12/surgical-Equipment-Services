import { motion } from "framer-motion";

const products = [
  {
    name: "Scalpel Set",
    description: "Precision surgical scalpels designed for accurate incisions.",
    image: "https://picsum.photos/500/400?1",
  },
  {
    name: "Microsurgical Forceps",
    description: "High-precision forceps for delicate surgical procedures.",
    image: "https://picsum.photos/500/400?2",
  },
  {
    name: "Retractors",
    description: "Reliable retractors providing optimal surgical visibility.",
    image: "https://picsum.photos/500/400?3",
  },
  {
    name: "Surgical Scissors",
    description: "Sharp and durable scissors for precise tissue cutting.",
    image: "https://picsum.photos/500/400?4",
  },
  {
    name: "Needle Holders",
    description: "Ergonomic holders ensuring secure needle control.",
    image: "https://picsum.photos/500/400?5",
  },
  {
    name: "Laparoscopic Instruments",
    description: "Advanced tools engineered for minimally invasive surgery.",
    image: "https://picsum.photos/500/400?6",
  },
];

function FeaturedProducts() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Featured Products
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Precision Instruments For Every Procedure
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5">
            Explore our most trusted surgical instruments, crafted to meet
            the highest standards of performance, reliability, and safety.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                <button className="group/button flex items-center gap-2 text-blue-600 font-semibold">
                  View Details

                  <span className="transition-transform duration-300 group-hover/button:translate-x-2">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition">
            View Full Catalog
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default FeaturedProducts;