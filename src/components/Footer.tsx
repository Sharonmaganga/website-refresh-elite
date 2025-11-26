import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AxiaAnalytics</h3>
            <p className="text-gray-400 mb-4">
              Transforming businesses with AI and data analytics.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/AxiaAnalytics"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/AxiaAnalytics"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/services" className="hover:text-white transition">
                  AI Expert Consultation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  AI Optimized Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Data Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Nairobi, Kenya</li>
              <li>
                <a href="tel:+254728702495" className="hover:text-white transition">
                  +254 728 702 495
                </a>
              </li>
              <li>
                <a
                  href="mailto:Axiaanalyticsglobal@gmail.com"
                  className="hover:text-white transition"
                >
                  Axiaanalyticsglobal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AxiaAnalytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
