import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Headphones,
  PackageCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    description:
      "All instruments meet international medical standards and undergo strict quality control.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Reliable logistics ensure quick and secure delivery to hospitals and clinics worldwide.",
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    description:
      "Our experts are always available to assist with product selection and maintenance.",
  },
  {
    icon: PackageCheck,
    title: "Sterile Packaging",
    description:
      "Every product is packed with care to maintain hygiene and safety standards.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Trusted By Healthcare Professionals
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            We deliver precision-engineered surgical instruments backed by
            quality assurance, dependable service, and industry expertise.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300">
                  <Icon
                    size={30}
                    className="text-blue-600 group-hover:text-white transition-all duration-300"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;