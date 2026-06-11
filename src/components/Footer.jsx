import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Surgical Equipment Services
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Delivering precision-engineered surgical instruments
              trusted by healthcare professionals worldwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Categories
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>Neurosurgery</li>
              <li>Orthopedic</li>
              <li>ENT</li>
              <li>Laparoscopy</li>
            </ul>
          </div>

          {/* Social */}
        <div className="flex gap-4">

  <a
    href="#"
    className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition"
  >
    <FaFacebookF size={20} />
  </a>

  <a
    href="#"
    className="p-3 rounded-full bg-slate-800 hover:bg-pink-600 transition"
  >
    <FaInstagram size={20} />
  </a>

  <a
    href="#"
    className="p-3 rounded-full bg-slate-800 hover:bg-blue-700 transition"
  >
    <FaLinkedinIn size={20} />
  </a>

  <a
    href="#"
    className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition"
  >
    <FaXTwitter size={20} />
  </a>

</div>  

        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-gray-500">
          © 2026 Surgical Equipment Services. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;