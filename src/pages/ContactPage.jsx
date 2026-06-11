import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-cyan-500 text-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="max-w-3xl mx-auto text-lg">
            Have questions about our products or services?
            Our team is here to help.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >

            <h2 className="text-3xl font-bold mb-8">
              Send Us A Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border rounded-xl"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border rounded-xl"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 border rounded-xl"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 border rounded-xl"
              />

              <button
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition"
              >
                Send Message
              </button>

            </form>

          </motion.div>

          {/* Contact Info */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex gap-4">
                <MapPin className="text-indigo-600" />
                <div>
                  <h3 className="font-semibold">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-indigo-600" />
                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-indigo-600" />
                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    info@surgicalequipment.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-indigo-600" />
                <div>
                  <h3 className="font-semibold">
                    Working Hours
                  </h3>
                  <p className="text-gray-600">
                    Mon - Sat | 9 AM - 7 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ContactPage;