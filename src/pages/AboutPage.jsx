import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Globe,
  Users,
} from "lucide-react";

function AboutPage() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description:
        "All products are manufactured and inspected according to international standards.",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description:
        "Years of experience serving hospitals, clinics, and healthcare professionals.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Supplying precision surgical instruments to customers worldwide.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Dedicated support and consultation for every requirement.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-cyan-500 text-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About Our Company
          </h1>

          <p className="max-w-3xl mx-auto text-lg">
            Delivering trusted surgical instruments and healthcare
            solutions with precision, quality, and reliability.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We specialize in supplying premium-quality surgical
              instruments for hospitals, clinics, and healthcare
              professionals. Our mission is to provide reliable,
              innovative, and precision-engineered equipment that
              enhances patient care and surgical outcomes.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h3 className="text-2xl font-bold mb-4">
              Mission
            </h3>

            <p className="text-gray-600 mb-8">
              To deliver world-class surgical equipment that
              healthcare professionals can trust.
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Vision
            </h3>

            <p className="text-gray-600">
              To become a globally recognized provider of
              innovative surgical solutions.
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Professionals Trust Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <Icon
                  size={42}
                  className="text-indigo-600 mb-5"
                />

                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </section>

    </div>
  );
}

export default AboutPage;