function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
              Delivering Precision &
              Reliability in Healthcare
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed text-lg">
              We are dedicated to supplying high-quality surgical instruments
              and medical equipment to hospitals, clinics, and healthcare
              professionals worldwide. Our commitment to innovation,
              precision, and safety ensures that every product meets the
              highest industry standards.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              With years of experience in the medical industry, we have built
              strong relationships with healthcare providers by delivering
              reliable solutions that improve patient care and support
              successful surgical outcomes.
            </p>

            <div className="flex flex-wrap gap-8 mt-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  25+
                </h3>
                <p className="text-gray-600">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  500+
                </h3>
                <p className="text-gray-600">
                  Hospitals Served
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  69K+
                </h3>
                <p className="text-gray-600">
                  Products Delivered
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To empower healthcare professionals with world-class surgical
              instruments that enhance precision, efficiency, and patient
              safety.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <p>Premium Quality Medical Instruments</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <p>Certified & Sterile Equipment</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <p>Fast Global Delivery</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <p>Dedicated Customer Support</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;