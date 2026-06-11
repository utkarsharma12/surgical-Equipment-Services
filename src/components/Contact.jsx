import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Let's Discuss Your Requirements
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get in touch with our team for product inquiries,
            quotations, or technical assistance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">
              Send A Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition"
              >
                Send Message
              </button>

            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <MapPin size={28} />
                <div>
                  <h4 className="font-semibold">
                    Address
                  </h4>
                  <p>
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={28} />
                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>
                  <p>
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={28} />
                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>
                  <p>
                    info@surgicalequipment.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={28} />
                <div>
                  <h4 className="font-semibold">
                    Working Hours
                  </h4>
                  <p>
                    Monday - Saturday
                  </p>
                  <p>
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;