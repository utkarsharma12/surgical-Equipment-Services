import { motion } from "framer-motion";
import { ArrowLeft, FileText, ShieldCheck } from "lucide-react";

function ProductDetails() {
return ( <div className="min-h-screen bg-slate-50 py-20"> <div className="max-w-7xl mx-auto px-6">

    {/* Back Button */}
    <button className="flex items-center gap-2 text-blue-600 font-medium mb-8 hover:gap-3 transition-all">
      <ArrowLeft size={20} />
      Back to Products
    </button>

    <div className="grid lg:grid-cols-2 gap-12">

      {/* Product Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-3xl shadow-lg overflow-hidden"
      >
        <img
          src="https://picsum.photos/800/600"
          alt="Product"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Product Information */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          General Surgery
        </span>

        <h1 className="text-5xl font-bold text-gray-900 mt-4">
          Scalpel Set
        </h1>

        <p className="text-gray-600 mt-6 leading-relaxed">
          Premium-quality surgical scalpel set designed for precision,
          durability, and reliability in operating rooms and healthcare
          facilities.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">
            Request Quote
          </button>

          <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition">
            Download Catalog
          </button>
        </div>

        {/* Specs */}
        <div className="mt-12 space-y-5">

          <div className="flex gap-3 items-start">
            <ShieldCheck className="text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold">
                Certified Quality
              </h3>
              <p className="text-gray-600">
                Manufactured according to international standards.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <FileText className="text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">
                Specifications
              </h3>
              <ul className="text-gray-600 mt-2 space-y-1">
                <li>• Stainless Steel Construction</li>
                <li>• Corrosion Resistant</li>
                <li>• Sterilizable</li>
                <li>• Surgical Grade Finish</li>
              </ul>
            </div>
          </div>

        </div>
      </motion.div>

    </div>

    {/* Applications */}
    <div className="mt-24">
      <h2 className="text-3xl font-bold mb-6">
        Applications
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          General Surgery
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          Hospital Operating Rooms
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          Medical Training Institutions
        </div>

      </div>
    </div>

  </div>
</div>

);
}

export default ProductDetails;
