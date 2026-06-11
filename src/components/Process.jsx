import { motion } from "framer-motion";
import {
  MessageSquareMore,
  ClipboardCheck,
  Stethoscope,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquareMore,
    title: "Inquiry",
    description:
      "Tell us your requirements and surgical equipment needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Consultation",
    description:
      "Our specialists help identify the best solutions.",
  },
  {
    icon: Stethoscope,
    title: "Product Selection",
    description:
      "Choose from a wide range of certified instruments.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "Fast and secure delivery directly to your facility.",
  },
];

function Process() {
  return (
    <section className="py-40 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-blue-600 uppercase tracking-[0.3em] font-semibold">
            Our Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            From Inquiry To Delivery
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            A streamlined process designed to deliver the right surgical
            instruments quickly, efficiently, and reliably.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 origin-left rounded-full"
          />

          {/* Steps */}
          <div className="grid lg:grid-cols-4 gap-12 relative">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.25,
                  }}
                  viewport={{ once: true }}
                  className="group text-center relative"
                >
                  {/* Circle */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 8,
                    }}
                    className="w-24 h-24 mx-auto rounded-full bg-white shadow-xl border border-blue-100 flex items-center justify-center relative z-10"
                  >
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                    <Icon
                      size={34}
                      className="text-blue-600 relative z-10"
                    />
                  </motion.div>

                  {/* Step Number */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.3 + 0.3,
                    }}
                    viewport={{ once: true }}
                    className="mt-6"
                  >
                    <span className="text-blue-600 font-bold text-sm tracking-widest">
                      STEP 0{index + 1}
                    </span>
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.3 + 0.4,
                    }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mt-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 mt-4 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </motion.div>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Process;